import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/admin/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin/blogs' },
  { path: 'admin/blogs', component: BlogsComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
