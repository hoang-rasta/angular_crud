import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Index } from './post/index';
import { Create } from './post/create/create';
import { Edit } from './post/edit/edit';
import { Show } from './post/show/show';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'posts', component: Index },
  { path: 'posts/create', component: Create },
  { path: 'posts/:postId/edit', component: Edit },
  { path: 'posts/:postId', component: Show },
  // Thêm các route khác ở đây
];
