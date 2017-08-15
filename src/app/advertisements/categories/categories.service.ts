import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

    categories = [
        {
            name: 'Electronics',
            values: [
                'Home Electronics',
                'LCDs',
                'Mobile & Tablets',
                'Technical Services',
                'TV & DVDs'
            ],
        },
        {
            name: 'Events & Notices',
            values: [
                'Auction Announcements',
                'Business Events',
                'Business Notices',
                'Children Events',
                'Legal & Public Notices'
            ],
        },
        {
            name: 'Fashion',
            values: [
                'Bags ',
                'Beauty Products',
                'Clothing M/F',
                'Jewelry',
                'Shoes M/F'
            ],
        },
        {
            name: 'Health & Fitness',
            values: [
                'Activities',
                'Fitness',
                'Gym',
                'Hospitals & Clinics',
                'Parlours'
            ],
        },
        {
            name: 'Home & Lifestyle',
            values: [
                'Art & Photography',
                'Entertainment',
                'Fittings',
                'Home Furniture',
                'Office Furniture '
            ],
        },
        {
            name: 'Jobs',
            values: [
                'Accounts Jobs',
                'Cleaning & Washing',
                'Data Entry',
                'Design & Code',
                'Finance Jobs'
            ],
        },
        {
            name: 'Matrimonials',
            values: [
                'Brides',
                'Casual Dating',
                'Dating',
                'Friendship',
                'Grooms'
            ],
        },
        {
            name: 'Miscellaneous',
            values: [
                'Classic & Antique',
                'Kids Stuff',
                'Music Equipement',
                'Pets Stuff',
                'Scrape'
            ],
        },
        {
            name: 'Real Estate',
            values: [
                'Farms',
                'Home for rent',
                'Hotels',
                'Land for sale',
                'Offices for rent'
            ],
        },
        {
            name: 'Services',
            values: [
                'Cleaning Services',
                'Educational',
                'Food Services',
                'Medical',
                'Office & Home Removals'
            ],
        },
        {
            name: 'Vehicles',
            values: [
                'Cars',
                'Classic & Modern',
                'Fancy Cars',
                'Kids Bikes',
                'Motor Bikes'
            ],
        },
    ]

    constructor() { }

    getCategories() {
        return this.categories;
    }

}