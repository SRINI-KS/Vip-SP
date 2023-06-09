import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddrequestService {
  constructor(private router:Router,private http:HttpClient) {}

  category: string[] = [
    'Administration business and management',
    'Alternative therapies',
    'Animals land and environment',
    'Computing and ICT',
    'Construction and building',
    'Design arts and crafts',
    'Education and training',
    'Engineering',
    'Facilities and property services',
    'Financial services',
    'Garage services',
    'Hairdressing and beauty',
    'Healthcare',
    'Heritage culture and libraries',
    'Hospitality catering and tourism',
    'Languages',
    'Legal and court services',
    'Manufacturing and production',
    'Performing arts and media',
    'Print and publishing marketing and advertising',
    'Retail and customer services',
    'Science mathematics and statistic',
    'Security uniformed and protective services',
    'Social sciences and religion',
    'Social work and caring services',
    'Sport and leisure',
    'Transport distribution and logistics',
  ];

  getSubCategory() {
    const subCategory: { [key: string]: string[] } = {
      'Animals land and environment': [
        'Agricultural consultant',
        'Agricultural engineer',
        'Animal care worker',
        'Animal technician',
        'Assistance dog trainer',
        'Cemetery worker',
        'Climate Scientist',
        'Countryside officer',
        'Countryside ranger',
        'Dog groomer',
        'Dog handler',
        'Ecologist',
        'Environmental consultant',
        'Environmental health officer',
        'Environmental manager',
        'Farm manager',
        'Farm worker',
        'Farrier',
        ' Fence installer',
        'Fish farm worker',
      ],
      'Transport distribution and logistics': [
        'Air traffic controller',
        'Airport baggage handler',
        'Bus or coach driver',
        'Courier',
        ' Delivery van driver',
        'Driving examiner',
        'Driving instructor',
        'Dynamic positioning operator',
        'Flight dispatcher',
        'Forklift truck operator',
        'Freight forwarder',
        'Large goods vehicle driver',
        'Pilot- Airline',
        'Pilot- Helicopter',
        'Postal delivery worker',
        'Road transport manager',
        'Taxi driver',
        'Train driver',
        'Warehouse operative',
      ],
    };
    // console.log(val)
    return subCategory;
  }
}
