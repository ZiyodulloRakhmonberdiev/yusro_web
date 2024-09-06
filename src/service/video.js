import axios from './apis';

const VideoArticle = {
  async fetchVideos(params) {
    try {
      const response = await axios.get('/main/video/', { params });
      return response.data;
    } catch (error) {
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },

  async fetchVideoSection() {
    try {
      const response = await axios.get('/main/video-category/');
      return response.data;
    } catch (error) {
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },
  async fetchVideosByCategory(categoryId, page, pageSize) {
    try {
      const response = await axios.get(`/main/video/by-category/${categoryId}/`, { params: { page, page_size: pageSize } });
      return response.data;
    } catch (error) {
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },
  
  async readVideo(id) {
    try{
      const response = await axios.get(`/main/video/${id}/`);
      return response.data;
    }catch(error){
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },
  
  // async fetchArticleTag() {
  //   try{
  //     const response = await axios.get(`/main/tag/`);
  //     return response.data;
  //   }catch(error){
  //     throw error.response || new Error('Xatolik yuz berdi!');
  //   }
  // },

};

export default VideoArticle;
