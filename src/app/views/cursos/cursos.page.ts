import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CursosService} from './cursos.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  courses: any[] = [];
  totals = 0;
  pages = 0;
  page = 1;
  queryParams: any = {
    input: 'level',
    value: 1,
    page: 1,
    limit: 100,
    title: null
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.getCoursesList();
  }

  constructor(
    private cursosService: CursosService,
    private globalSer: GlobalService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/ingresar']);
  }

  ngOnInit() { }

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
    else await this.getCoursesList();
  }

  async getCoursesList() {
    // if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const data: any = await this.cursosService.getCourses(this.queryParams);

    if (data && !data.error) {
      this.courses = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async goToCreate() {
    await this.router.navigate(['/cursos/crear']);
  }
}
