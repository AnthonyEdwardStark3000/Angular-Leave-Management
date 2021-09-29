import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
import { NewStudentComponent } from './new-student/new-student.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path: 'home',component: HomeComponent},
{path: 'register',component: RegisterComponent},
{path:'',redirectTo:'register', pathMatch: 'full' },
{path:'about',redirectTo:'aboutUs', pathMatch: 'full' },
{path:'student',component:StudentComponent},
{path:'staff',component:StaffComponent},
{path:'admin',component:AdminComponent},
{path:'about',component:AboutUsComponent},
{path:'newstu',component:NewStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
