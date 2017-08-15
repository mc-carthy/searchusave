import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

    categories = {
        'ELECTRONICS': [
            'Home Electronics',
            'LCDs',
            'Mobile & Tablets',
            'Technical Services',
            'TV & DVDs'
        ],
        
        'EVENTS & NOTICES': [
            'Auction Announcements',
            'Business Events',
            'Business Notices',
            'Children Events',
            'Legal & Public Notices'
        ],

        'FASHION': [
            'Bags ',
            'Beauty Products',
            'Clothing M/F',
            'Jewelry',
            'Shoes M/F'
        ],

        'HEALTH & FITNESS': [
            'Activities',
            'Fitness',
            'Gym',
            'Hospitals & Clinics',
            'Parlours'
        ],

        'HOME & LIFESTYLE': [
            'Art & Photography',
            'Entertainment',
            'Fittings',
            'Home Furniture',
            'Office Furniture '
        ],

        'JOBS': [
            'Accounts Jobs',
            'Cleaning & Washing',
            'Data Entry',
            'Design & Code',
            'Finance Jobs'
        ],

        'MATRIMONIALS': [
            'Brides',
            'Casual Dating',
            'Dating',
            'Friendship',
            'Grooms'
        ],

        'MISCELLANEOUS': [
            'Classic & Antique',
            'Kids Stuff',
            'Music Equipement',
            'Pets Stuff',
            'Scrape'
        ],

        'REAL ESTATE': [
            'Farms',
            'Home for rent',
            'Hotels',
            'Land for sale',
            'Offices for rent'
        ],

        'SERVICES': [
            'Cleaning Services',
            'Educational',
            'Food Services',
            'Medical',
            'Office & Home Removals'
        ],

        'VEHICLES': [
            'Cars',
            'Classic & Modern',
            'Fancy Cars',
            'Kids Bikes',
            'Motor Bikes'
        ]
    }

    constructor() { }

}