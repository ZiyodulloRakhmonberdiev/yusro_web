import axios from './apis';

const BlogArticle = {
  async fetchArticles(params) {
    try {
      const response = await axios.get('/main/post/', { params });
      return response.data;
    } catch (error) {
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },

  async fetchArticleSection() {
    const response = await axios.get('/main/post-category/');
    return response.data;
  },

  async fetchArticlesByCategory(categoryId, page, pageSize) {
    try {
      const response = await axios.get(`/main/post/by-category/${categoryId}/`, { params: { page, page_size: pageSize } });
      return response.data;
    } catch (error) {
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },
  
  async readArticle(id) {
    try{
      const response = await axios.get(`/main/post/${id}/`);
      return response.data;
    }catch(error){
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },
  
  async fetchArticleTag() {
    try{
      const response = await axios.get(`/main/tag/`);
      return response.data;
    }catch(error){
      throw error.response || new Error('Xatolik yuz berdi!');
    }
  },

};

export default BlogArticle;
