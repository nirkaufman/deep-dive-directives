(function () {

    function UsecasesController() {
        this.data = [
            {
                name: 'Europe',
                children: [{
                    name: 'Italy',
                    children: [
                        {    name: 'Rome' },
                        {    name: 'Milan'    }
                    ]},
                    {    name: 'Spain'}
                ]
            },

            {
                name: 'South America',
                children: [
                    {    name: 'Brazil'   },
                    {    name: 'Peru' }
                ]
            }
        ];

        this.peoples = [{"firstName":"Sonia","lastName":"Hodges"},{"firstName":"Benedict","lastName":"Morrow"},{"firstName":"Keegan","lastName":"Fields"},{"firstName":"Jade","lastName":"Martinez"},{"firstName":"Jaquelyn","lastName":"Suarez"},{"firstName":"Leo","lastName":"Hughes"},{"firstName":"Skyler","lastName":"Sharp"},{"firstName":"Genevieve","lastName":"Villarreal"},{"firstName":"Beau","lastName":"Hendrix"},{"firstName":"Lara","lastName":"Howard"},{"firstName":"Jonah","lastName":"Crawford"},{"firstName":"Kendall","lastName":"Lane"},{"firstName":"Kimberly","lastName":"Mcclain"},{"firstName":"Ingrid","lastName":"Salinas"},{"firstName":"Moses","lastName":"Mcpherson"},{"firstName":"Britanney","lastName":"Sweeney"},{"firstName":"Patricia","lastName":"Perez"},{"firstName":"Roth","lastName":"Heath"},{"firstName":"Nora","lastName":"Osborne"},{"firstName":"Giacomo","lastName":"Shepard"}];

    }

    angular.module('directives.app')
        .controller('UsecasesController', ['$scope', UsecasesController])
}());