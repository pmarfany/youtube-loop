import {useHistory, useLocation} from 'react-router-dom';

type UseQuery = [string, (value: string) => void];

function useQuery(key: string): UseQuery {
  const location = useLocation();
  const history = useHistory();

  return [
    new URLSearchParams(location.search).get(key) ?? '',
    (value: string) => history.replace(`/?${key}=${value}`),
  ];
}

export { useQuery };
