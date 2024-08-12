import axios from './api';

const BlogArticle = {
  async fetchArticles(params) {
    try {
      const response = await axios.get('/post/articles/', { params });
      return response.data;
    } catch (error) {
      throw error.response || new Error('Unknown error');
    }
  },

  async fetchArticleSection() {
    const response = await axios.get('/post/categories/');
    return response.data;
  },
  async fetchArticlePopular(params) {
    const response = await axios.get('/post/tags/', { params });
    return response.data;
  },

  async fetchArticleTag(params) {
    const response = await axios.get('/post/tags/', { params });
    return response.data;
  },

  async readArticle(id) {
    const response = await axios.get(`/post/articles/${id}`);
    return response.data;
  },

  // post comment
  async postComment(user) {
    console.log(user);
    const response = await axios.post(`/post/comments/`, user);
    return response.data;
  },
  
};

export default BlogArticle;
