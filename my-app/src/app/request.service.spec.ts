import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RequestService } from './request.service';
import { request } from './Model/request.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
describe('RequestService', () => {
  let service: RequestService;
  let httpClient: HttpClient;
 const baseUrl='http://localhost:3000/request';
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestService,
        { provide: 'http://localhost:3000/request',
          useValue: 'apiurl'
        }],
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    service = TestBed.inject(RequestService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should get all request', () => {
    const Mockrequestdata=[
      {
      id: 13,
      purpose: "Trip",
      description: "Trip with team to Pondicherry",
      Approver: "Kaushal",
      Approved: true,
      Reject: false,
      Estimated: 100000,
      Advance: 50000,
      date: "2022-05-25"
    }
  ];
    let response:request[];

     service.getrequest().subscribe(res => {

        response=res;
        // expect(response).toEqual(Mockrequestdata)
     });
     const req = httpTestingController.expectOne(baseUrl);
     debugger;
    expect(req.request.method).toBe('GET');
     req.flush(Mockrequestdata);
     httpTestingController.verify();
  });
});
