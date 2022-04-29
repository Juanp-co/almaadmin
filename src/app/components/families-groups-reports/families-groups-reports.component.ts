import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-families-groups-reports',
  templateUrl: './families-groups-reports.component.html',
  styleUrls: ['./families-groups-reports.component.scss'],
})
export class FamiliesGroupsReportsComponent implements OnInit {

  @Input() data: any[]|null = null;

  listGroups: any[]|null = null;
  selected: any|null = null;
  report: any|null = null;
  observations: any[]|null = null;
  observationsPreview: any[]|null = null;
  dataToReport: any|null = null;
  dataToReportText: any|null = null;
  showTotals = true;
  showObservations = true;
  onlyText = true;

  constructor(
    private globalSer: GlobalService
  ) { }

  async ngOnInit() {
    if (this.data) {
      this.listGroups = this.data.map(r => ({ _id: r._id, groupName: r.groupName }));
      if (this.listGroups.length > 0) this.selected = this.listGroups[0];
      await this.setDataToReport(this.selected ? this.data[0].report : null);
      await this.setObservationsValues(this.data.length > 0 ? this.data[0].observations : null);
    }
    else this.dataToReport = null;
  }

  setShowTotals() {
    this.showTotals = !this.showTotals;
  }

  setShowObservations() {
    this.showObservations = !this.showObservations;
  }

  async setObservationsValues(data: any) {
    this.observations = [];
    this.observationsPreview = [];
    if (data && data.length > 0) {
      this.observations = data;
      data.forEach(o => {
        const date = dayjs(o.date, 'YYYY-MM-DD HH:mm:ss', true)
          .locale('es')
          .format('ddd, DD [de] MMM [de] YYYY - H:mm a');
        this.observationsPreview.push({
          observation: o.observations.length > 50 ? `${o.observations.substr(0, 50)} ...` : o.observations,
          member: o.member,
          date,
        });
      });
    }
  }

  async setDataToReport(data: any) {
    this.dataToReport = null;
    this.dataToReport = !data ? null : {
      data1: {
        title: 'Hermanos',
        data: [
          {
            label: 'Hermanos',
            qty: data.brethren
          },
          {
            label: 'Amigos',
            qty: data.friends
          }
        ]
      },
      data2: {
        title: 'Niños',
        data: [
          {
            label: 'Niños',
            qty: data.christianChildren
          },
          {
            label: 'Amigos',
            qty: data.christianChildrenFriends
          },
        ]
      },
      data3: {
        title: 'Visitas',
        data: [
          {
            label: 'Programadas',
            qty: data.scheduledVisits
          },
          {
            label: 'Disipulado',
            qty: data.discipleshipVisits
          },
        ]
      },
      data4: {
        title: 'Asistencia',
        data: [
          {
            label: 'Hermanos',
            qty: data.churchAttendance
          },
          {
            label: 'Niños',
            qty: data.churchAttendanceChildren
          },
        ]
      },
      data5: {
        title: 'Conversiones y reconcilaciones',
        data: [
          {
            label: 'Reconciliaciones',
            qty: data.reconciliations
          },
          {
            label: 'Conversiones',
            qty: data.conversions
          },
          {
            label: 'Conversiones de niños',
            qty: data.conversionsChildren
          },
        ]
      },
      data6: {
        title: 'Otros',
        data: [
          {
            label: 'Planificación de hnos.',
            qty: data.brethrenPlanning
          },
          {
            label: 'Lectura bíblica',
            qty: data.bibleReading
          },
          {
            label: 'Consolidados',
            qty: data.consolidated
          },
        ]
      },
      totals: {
        title: 'Total de hermanos y niños',
        qty: data.total
      },
      offering: {
        title: 'Total de ofrendas',
        qty: this.globalSer.getCurrency(data.offering || 0)
      },
    };
    this.dataToReportText = !data ? null : [
      { label: 'Hermanos', value: data.brethren },
      { label: 'Amigos', value: data.friends },
      { label: 'Niños', value: data.christianChildren },
      { label: 'Niños (amigos)', value: data.christianChildrenFriends },
      { label: 'Visitas programadas', value: data.scheduledVisits },
      { label: 'Visitas disipulado', value: data.discipleshipVisits },
      { label: 'Visitas', value: data.discipleshipVisits },
      { label: 'Asistencia de hnos.', value: data.churchAttendance },
      { label: 'Asistencia de niños', value: data.churchAttendanceChildren },
      { label: 'Reconciliaciones', value: data.reconciliations },
      { label: 'Conversiones', value: data.conversions },
      { label: 'Conversiones de niños', value: data.conversionsChildren },
      { label: 'Visitas', value: data.discipleshipVisits },
      { label: 'Planif. de hermanos', value: data.discipleshipVisits },
      { label: 'Lectura bíblica', value: data.brethrenPlanning },
      { label: 'Consolidaciones', value: data.bibleReading },
      { label: 'Total de hnos. y niños', value: data.total },
      { label: 'Total de ofrendas', value: this.globalSer.getCurrency(data.offering || 0) },
    ];
  }

  getNumberGroup() {
    return this.selected?.groupName || 'Desconocido';
  }

  async showListGroups(id: any) {
    const inputs: any[] = [];
    for (const lg of this.listGroups) {
      inputs.push( {
        name: `list-groups`,
        type: 'radio',
        label: lg.groupName,
        value: lg._id,
        checked: lg._id === id,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione un grupo',
      inputs,
      confirmAction: async (value) => {
        if (value !== id) {
          this.dataToReport = null;
          const data = this.data.find(r => r?._id === value) || null;
          await this.setDataToReport(data?.report || null);
          this.selected = data || null;
          await this.setObservationsValues(data?.observations || null);
        }
      }
    });
  }

  downloadData() {
    const data = this.data.find(d => d._id === this.selected?._id) || null;

    if (data) {
      const keys = [
        { key: 'brethren', key2: 'Hermanos' },
        { key: 'friends', key2: 'Amigos' },
        { key: 'scheduledVisits', key2: 'VisitasProgramadas' },
        { key: 'discipleshipVisits', key2: 'VisitasAlDisipulado' },
        { key: 'christianChildren', key2: 'NinnosCristianos' },
        { key: 'christianChildrenFriends', key2: 'NinnosCristianosAmigos' },
        { key: 'offering', key2: 'Ofrendas' },
        { key: 'churchAttendance', key2: 'AsistenciasALaIglesia' },
        { key: 'churchAttendanceChildren', key2: 'AsistenciasNinnosIglesia' },
        { key: 'conversions', key2: 'Conversiones' },
        { key: 'reconciliations', key2: 'Reconciliaciones' },
        { key: 'conversionsChildren', key2: 'ConversionesNinnos' },
        { key: 'brethrenPlanning', key2: 'PlanificacionHnos' },
        { key: 'bibleReading', key2: 'LecturaBiblica' },
        { key: 'consolidated', key2: 'Consolidados' },
        { key: 'total', key2: 'TotalPersonas' },
      ];

      const model: any[] = [];

      this.data.forEach(dt => {
        const m: any = {
          Grupo: dt.groupName,
          Hermanos: 0,
          Amigos: 0,
          VisitasProgramadas: 0,
          VisitasAlDisipulado: 0,
          NinnosCristianos: 0,
          NinnosCristianosAmigos: 0,
          Ofrendas: 0,
          AsistenciasALaIglesia: 0,
          AsistenciasNinnosIglesia: 0,
          Conversiones: 0,
          Reconciliaciones: 0,
          ConversionesNinnos: 0,
          PlanificacionHnos: 0,
          LecturaBiblica: 0,
          Consolidados: 0,
          TotalPersonas: 0,
        };

        keys.forEach(k => {
          if (data.report[k.key]) m[k.key2] = dt.report[k.key];
        });

        model.push(m);
      });
      this.globalSer.downloadCSVFromJson(
        `Reporte_Grupos_Familiares_-_${dayjs().format('YYYY-MM-DD[_]HH:mm:ss')}.csv`,
        model
      );
    }
    else
      this.globalSer.presentAlert(
        'Error',
        `Disculpe, pero ha ocurrido un error al momento de descargar la información.`
      );
  }

  async showListModelDataOpt() {
    const inputs: any[] = [];
    for (const lg of [{ label: 'Texto', value: true }, { label: 'Gráfico', value: false }]) {
      inputs.push( {
        name: `show-mode-data`,
        type: 'radio',
        label: lg.label,
        value: lg.value,
        checked: lg.value === this.onlyText,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: async (value) => { this.onlyText = value || false; }
    });
  }

  async showObservation(index: number) {
    const ob = this.observations[index] || null;
    if (ob) {
      const date = dayjs(ob.date, 'YYYY-MM-DD HH:mm:ss', true)
        .locale('es')
        .format('ddd, DD [de] MMM [de] YYYY - H:mm a');
      const member = ob.member ? `<b>Por:</b> ${ob.member.names} ${ob.member.lastNames}` : null;

      await this.globalSer.presentAlert(
        'Observación',
        `${member} <br><br>${date}<br><br>${ob.observations}`
      );
    }
    else
      await this.globalSer.presentAlert(
        'Error',
        `Disculpe, pero ha ocurrido un error al momento de cargar la observación.`
      );
  }

}
