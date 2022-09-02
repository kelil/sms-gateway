import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private ApiUrl = `${environment.API_OUT_URL}` + "api/v1/employees"
  private piUrl = `${environment.API_OUT_URL}` + "api/v1/processes"
  private spiUrl = `${environment.API_OUT_URL}` + "api/v1/subprocesses"
  private tiUrl = `${environment.API_OUT_URL}` + "api/v1/teams"
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.ApiUrl);
  }

  addEmployee(data: any) {
  console.log(data.process)
  let empdata = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    position: data.position,
    process: data.process,
    subprocess: data.subprocess,
    team: data.team,
    coopId: data.coopId
  }
  return this.http.post(this.ApiUrl + "/employee", empdata);
  }

  updateEmployee(data: any, id: any){
    return this.http.patch(this.ApiUrl+"/employee/"+id,data);
  }

  getEmployee(id:any){
    return this.http.get(this.ApiUrl+"/employee/"+id);
  }

  deleteEmployee(id: any){
    return this.http.delete(this.ApiUrl+"/employee/"+id);
  }

  getProcesses() {
    return this.http.get(this.piUrl);
  }

  getSubProcesses() {
    return this.http.get(this.spiUrl);
  }

  getTeams() {
    return this.http.get(this.tiUrl);
  }
}
