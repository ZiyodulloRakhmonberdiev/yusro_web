import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useQueryParams = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getParams = () => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page'), 10);
    const pageSize = parseInt(queryParams.get('page_size'), 10);
    const categoryId = parseInt(queryParams.get('category_id'), 10);

    return {
      page: isNaN(page) ? 1 : page,
      pageSize: isNaN(pageSize) ? 3 : pageSize,
      categoryId: isNaN(categoryId) ? 1 : categoryId,
    };
  };

  const [params, setParams] = useState(getParams());

  useEffect(() => {
    setParams(getParams());
  }, [location.search]);

  const updateQueryParams = (newParams) => {
    const params = new URLSearchParams(location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    navigate({ search: params.toString() });
  };

  return { params, updateQueryParams };
};

export default useQueryParams;
