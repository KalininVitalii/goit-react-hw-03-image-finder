import { Component } from 'react';

import { NewsApiService } from './Services/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    tags: null,
    image: null,
    page: 1,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps ,prevState) {
    const { query, page, error } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchGallery();
    }
    
    if(error){
      alert(error);
    }
  } 

  fetchGallery=()=>{
    const { query, page } = this.state;

    this.setState({
      isLoading: true,
      error:null
    });

    NewsApiService(query, page).then(result => {        
        if (result.data.hits.length === 0) {
          alert('Nothing was find');
          return;
        }
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...result.data.hits],
        }))
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });        
      });    
  }

  onSubmit = queryUpdate => {
    if(this.state.query===queryUpdate){
      alert('Try to write something new :)');
      return;
    }
    this.setState({
      query: queryUpdate,
      gallery: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onModalOpen = (imageLarge, tags) => {
    this.setState({
      image: imageLarge,
      tags,
    });
  };

  onCloseModal = () => {
    this.setState({
      image: null,
      tags: null,
    });
  };

  render() {
    const { gallery, image, tags, isLoading } = this.state;
    return (
      <div className='1'>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        {gallery.length > 0 && (
          <>
            <ImageGallery>
              <ImageGalleryItem
                gallery={gallery}
                onModalOpen={this.onModalOpen}
              />
            </ImageGallery>
            <Button loadMore={this.loadMore} />
          </>
        )}
        {image && (
          <Modal image={image} tags={tags} onCloseModal={this.onCloseModal} />
        )}
      </div>
    );
  }
}

