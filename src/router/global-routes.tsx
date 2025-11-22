import MatchingComplete from '@/pages/matching-complete/matching-complete';
import MatchingPage from '@/pages/matching-page/matching-page';

import { ROUTES } from './constant/routes';
import { HomePage } from './lazy';

export const globalRoutes = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  { path: ROUTES.MATCHING_COMPLETE, element: <MatchingComplete /> },
];

export default globalRoutes;
