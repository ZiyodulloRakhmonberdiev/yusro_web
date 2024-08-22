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
  // async fetchVideoArticlePopular(params) {
  //   const response = await axios.get('/main/post/tags/', { params });
  //   return response.data;
  // },

  // async fetchArticleTag(params) {
  //   const response = await axios.get('/post/tags/', { params });
  //   return response.data;
  // },

  async readVideo(id) {
    try {
      const response = await axios.get(`/main/video/${id}/`);
      return response.data;
    } catch (error) {
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },

  // post comment
  // async postComment(user) {
  //   console.log(user);
  //   const response = await axios.post(`/post/comments/`, user);
  //   return response.data;
  // },
  
};

export default VideoArticle;