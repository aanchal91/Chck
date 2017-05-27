storeApp.controller('AdminController', function($scope,$filter){

 $scope.isActive = false;
    $scope.sections = [
    //        { name: 'Grid View', class: "store-vm-grid" },
        {name: 'List View', class: "store-vm-list"}];

  $scope.setMaster = function (section) {
        $scope.selected = section;
        $scope.isActive = !$scope.isActive;
    }

    $scope.isSelected = function (section) {
        return $scope.selected === section;
    }



var myStore = new store();
$scope.currentPage  = 0 ;
$scope.pageSize = 12;
$scope.numberOfPages = Math.ceil(myStore.products.length / $scope.pageSize);



    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };
    $scope.search = function (name) {
        $scope.filteredItems = $filter('filter')(myStore.products, function (product) {
            for (var attr in product) {
                if (searchMatch(product[name], $scope.query))
                    return true;
            }
            return false;
        });
        $scope.currentPage = 0;
        $scope.groupToPages();
    };
    $scope.myFilter = function (column, category) {
        $scope.filteredItems = $filter('filter')(myStore.products, function (product) {
            for (var attr in product) {
                if (searchMatch(product[column], category))
                    return true;
            }
            return false;
        });
        $scope.currentPage = 0;
        $scope.groupToPages();
    };
    $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.pageSize === 0) {
                $scope.pagedItems[Math.floor(i / $scope.pageSize)] = [$scope.filteredItems[i]];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.pageSize)].push($scope.filteredItems[i]);
            }
        }
    };
    // functions have been describe process the data for display
    $scope.myFilter();
    $scope.search();

});




function store() {
    this.products = [
          { num: 1, code: 'APL', category: 'laptop', name: 'Acer Aspire', src: "laptop1.png", description: 'Acer Aspire is a series of personal computers by Acer Inc. aimed at the casual household user or for small business use. The Aspire series covers both desktop computers and laptops.', price: 5.99, cal: 10 },
          { num: 2, code: 'AVC', category: 'EMachine', name: 'Acer eMachines E725', src: "emachine1.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 11, cal: 10 },
          { num: 3, code: 'BAN', category: 'phone', name: 'Acer Allegro', src: "phone1.png", description: 'The Acer Allegro is a Windows Phone 7.5 smartphone with a 3.6-inch WVGA display, 1 GHz processor, 512 MB RAM, 8 GB internal storage, 5-megapixel camera, aGPS, Wi-Fi, Bluetooth and microUSB. ', price: 6, cal: 10 },
          { num: 4, code: 'CTP', category: 'phone', name: 'Acer be Touch E100/1000', src: "phone2.png", description: 'Acer beTouch E100/101 is a Windows Mobile (6.5) touchscreen phone. Both feature 3.2-inch WQVGA touch display, 2-megapixel camera, GPS and supports HSDPA networks. ', price: 13, cal: 10 },
          { num: 5, code: 'FIG', category: 'phone', name: 'Acer beTouch E130', src: "phone3.png", description: 'The beTouch E130 runs the Android operating system 1.6 (Donut).The device comes equipped with Acer Spinlet application for listening to music in streaming and preinstalled Facebook and Twidroid. ', price: 750, cal: 10 },
          { num: 6, code: 'GRP', category: 'phone', name: 'Acer beTouch E140', src: "phone4.png", description: 'The Acer beTouch 140 was unveiled on December 2010. The device is to be released in the UK though the exact date is not known. ', price: 800, cal: 10 },
          { num: 7, code: 'GUA', category: 'laptop', name: 'Acer Aspire 8920', src: "laptop2.png", description: 'The Acer Aspire 8920 is a series of notebooks released in 2008 Q1 by Acer Inc. and it was a part of the Gemstone series.', price: 500, cal: 10 },
          { num: 8, code: 'KIW', category: 'phone', name: 'Acer beTouch E200', src: "phone5.png", description: 'If beTouch E200 runs Windows Mobile 6.5. It has a 3 megapixel camera and an A-GPS module comes with Google Maps. It lacks of Wi-Fi capability. ', price: 167, cal: 10 },
          { num: 9, code: 'ORG', category: 'EMachine', name: 'Acer eMachines E732', src: "emachine2.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 210, cal: 10 },
          { num: 10, code: 'LSS', category: 'laptop', name: 'Acer Extensa', src: "laptop3.png", description: 'Acer Extensa series is a line of Acer laptops designed for office and business users. Its competitors include the Dell Vostro and Latitude lines and Lenovo ThinkPad laptops. ', price: 215, cal: 10 },
          { num: 11, code: 'LAA', category: 'phone', name: 'Acer beTouch E400', src: "phone6.png", description: 'With this smartphone the company opted to go Android 2.1 (Éclair) and abandon the Windows Mobile 6.5 used in the first beTouch smartphones released starting October 2009.', price: 115, cal: 10 },
          { num: 12, code: 'LBB', category: 'laptop', name: 'Acer TravelMate', src: "laptop4.png", description: 'Of the various notebook series Acer has offered, the TravelMate is designated as a lightweight business and professional computer built to withstand day-to-day activities.', price: 645, cal: 10 },
          { num: 13, code: 'LCC', category: 'Gateway Hardware', name: 'Gateway AnyKey', src: "gateway1.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 130, cal: 10 },
          { num: 14, code: 'LDD', category: 'phone', name: 'Acer CloudMobile S500', src: "phone7.png", description: 'The Acer CloudMobile S500 tech specifications includes a 4.3 inch IPS Display, Krait dual-core processor running at 1.5 GHz with 1 GB of RAM, 8 MP rear camera and a front-facing ', price: 750, cal: 10 },
          { num: 15, code: 'LEE', category: 'Gateway Hardware', name: 'Ensoniq Soundscape OPUS', src: "gateway2.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 120, cal: 10 },
          { num: 16, code: 'LFF', category: 'Gateway Hardware', name: 'Gateway Handbook', src: "gateway3.png", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 500, cal: 10 },
          { num: 17, code: 'LGG', category: 'phone', name: 'Acer Liquid A1', src: "phone8.png", description: 'The Acer Liquid E is a touchscreen smartphone developed and marketed by Acer Inc.. It is the second handset designed by Acer that uses Android 2.1 (Eclair).[2] It was introduced in February, 2010 succeeding the Acer Liquid A1. ', price: 167, cal: 10 },
          { num: 18, code: 'LHH', category: 'phone', name: 'Acer Liquid Metal', src: "phone9.png", description: 'The smartphone runs Android 2.2 (Froyo) operating system and it is powered by an 800 MHz Qualcomm MSM7230 processor. It has 512 MB of RAM and 512 MB ROM. ', price: 200, cal: 10},
          { num: 19, code: 'GUP', category: 'phone', name: 'Acer Liquid Z630', src: "phone10.png", description: 'The Acer Liquid Z630 is a touchscreen smartphone developed and marketed by Acer Inc. It was announced in the September 2015 IFA exhibition in Berlin. ', price: 500, cal: 10 },
          { num: 20, code: 'KIG', category: 'phone', name: 'Acer neoTouch P300', src: "phone11.png", description: 'The Acer neoTouch P300 is a smartphone designed by Acer Inc. It runs Windows Mobile 6.5.3 operating system. It was unveiled at the Mobile World Congress 2010 in Barcelona and it is officially available from March 2010. ', price: 167, cal: 10 },
          { num: 21, code: 'ORU', category: 'phone', name: 'Acer neoTouch P400', src: "phone12.png", description: 'The Acer neoTouch P400 is a smartphone designed by Acer Inc. After using Android on phones such as the Acer beTouch E110 and Liquid A1, Acer has returned to Microsoft’s operating system.  ', price: 210, cal: 10 },
          { num: 22, code: 'LSG', category: 'phone', name: 'Acer neoTouch S200', src: "phone13.png", description: 'The Acer neoTouch S200 (also known as Acer neoTouch F1) is a Windows Mobile 6.5 - smartphone by Acer Inc designed for a business use.[1] The Acer neoTouch was launched in October 2009. ', price: 215, cal: 10 },
          { num: 23, code: 'LAA', category: 'phone', name: 'Acer Stream', src: "phone14.png", description: 'The Acer Stream is a smartphone manufactured by Acer Inc. and powered by the Android 2.1 operating system. It has 3.7” AMOLED capacitive multi-touchscreen.[2] It was announced at Computex 2010. ', price: 115, cal: 10 },
          { num: 24, code: 'LBM', category: 'phone', name: 'Acer Tempo', src: "phone15.png", description: 'Acer Tempo is the first windows mobile smartphone series developed by the Acer Inc. This is the first line from the company introduced since it acquired phone manufacturer E-TEN. The handset was officially presented during the 2009 Mobile World Congress ', price: 645, cal: 10 },
          { num: 25, code: 'LCN', category: 'phone', name: 'Acer DX900', src: "phone16.png", description: 'The Acer DX900 is the lead device in the company’s range of five mobile phones, labeled the Acer Tempo Smartphone Series. It was announced at the Mobile World Congress during February 2009 ', price: 130, cal: 10 },
          { num: 26, code: 'LDV', category: 'phone', name: 'Acer X960', src: "phone17.png", description: 'The X960 is a 3.5G quad-band Windows Mobile device with a 2.8-inch, 640 x 480 touch screen, which is operated via a stylus, and a five-way navigation button.', price: 750, cal: 10 },
          { num: 27, code: 'LEG', category: 'phone', name: 'Acer beTouch E110', src: "phone18.png", description: 'The Acer beTouch E110 is a smartphone manufactured by Acer Inc. of Taiwan. The phone is based on the Android 1.5 operating system. It is focused on social networking, with features for integrating with Facebook, Twitter and other social networks', price: 120, cal: 10 }];
}

function detailsprod() {
    this.details = [
         { id: 'APL', src1: 'processor.png', component: 'Processor', processor: '2.9GHz Quad-core Intel Core i5, Turbo Boost up to 3.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'AVC', src1: 'processor.png', component: 'Processor', processor: '1.3GHz Dual-Core Intel Core i5, Turbo Boost up to 2.6GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '1TB Serial ATA Drive @ 5400 rpm' },
         { id: 'BAN', src1: 'processor.png', component: 'Processor', processor: '1.9GHz Quad-core Intel Core i5, Turbo Boost up to 5.3GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'CTP', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i2, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '1GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '128GB Solid State Drive' },
         { id: 'FIG', src1: 'processor.png', component: 'Processor', processor: '1GHz Dual-core Intel Core i3, Turbo Boost up to 3.5GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'GRP', src1: 'processor.png', component: 'Processor', processor: '1GHz Quad-core Intel Core i8, Turbo Boost up to 2.1GHz', src2: 'memory.png', component2: 'Memory', memory: '5GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'GUA', src1: 'processor.png', component: 'Processor', processor: '3GHz Quad-core Intel Core i3, Turbo Boost up to 3.4GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'KIW', src1: 'processor.png', component: 'Processor', processor: '5GHz Quad-core Intel Core i6, Turbo Boost up to 2.3GHz', src2: 'memory.png', component2: 'Memory', memory: '3GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'ORG', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i9, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1700MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LSS', src1: 'processor.png', component: 'Processor', processor: '2.9GHz Quad-core Intel Core i5, Turbo Boost up to 3.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LAA', src1: 'processor.png', component: 'Processor', processor: '1.3GHz Dual-Core Intel Core i5, Turbo Boost up to 2.6GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '1TB Serial ATA Drive @ 5400 rpm' },
         { id: 'LBB', src1: 'processor.png', component: 'Processor', processor: '1.9GHz Quad-core Intel Core i5, Turbo Boost up to 5.3GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LCC', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i2, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '1GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '128GB Solid State Drive' },
         { id: 'LDD', src1: 'processor.png', component: 'Processor', processor: '1GHz Dual-core Intel Core i3, Turbo Boost up to 3.5GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LEE', src1: 'processor.png', component: 'Processor', processor: '1GHz Quad-core Intel Core i8, Turbo Boost up to 2.1GHz', src2: 'memory.png', component2: 'Memory', memory: '5GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'LFF', src1: 'processor.png', component: 'Processor', processor: '3GHz Quad-core Intel Core i3, Turbo Boost up to 3.4GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'LGG', src1: 'processor.png', component: 'Processor', processor: '5GHz Quad-core Intel Core i6, Turbo Boost up to 2.3GHz', src2: 'memory.png', component2: 'Memory', memory: '3GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LHH', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i9, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1700MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm'},
         { id: 'GUP', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i9, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1700MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'KIG', src1: 'processor.png', component: 'Processor', processor: '2.9GHz Quad-core Intel Core i5, Turbo Boost up to 3.6GHz', src2: 'memory.png', component2: 'Memory', memory: '4GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'ORU', src1: 'processor.png', component: 'Processor', processor: '1.3GHz Dual-Core Intel Core i5, Turbo Boost up to 2.6GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '1TB Serial ATA Drive @ 5400 rpm' },
         { id: 'LSG', src1: 'processor.png', component: 'Processor', processor: '1.9GHz Quad-core Intel Core i5, Turbo Boost up to 5.3GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '500GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LAA', src1: 'processor.png', component: 'Processor', processor: '4GHz Quad-core Intel Core i2, Turbo Boost up to 1.6GHz', src2: 'memory.png', component2: 'Memory', memory: '1GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '128GB Solid State Drive' },
         { id: 'LBM', src1: 'processor.png', component: 'Processor', processor: '1GHz Dual-core Intel Core i3, Turbo Boost up to 3.5GHz', src2: 'memory2.png', component2: 'Memory', memory: '2GB 1200MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' },
         { id: 'LCN', src1: 'processor.png', component: 'Processor', processor: '1GHz Quad-core Intel Core i8, Turbo Boost up to 2.1GHz', src2: 'memory.png', component2: 'Memory', memory: '5GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'LDV', src1: 'processor.png', component: 'Processor', processor: '3GHz Quad-core Intel Core i3, Turbo Boost up to 3.4GHz', src2: 'memory.png', component2: 'Memory', memory: '8GB 1300MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '256GB Solid State Drive' },
         { id: 'LEG', src1: 'processor.png', component: 'Processor', processor: '5GHz Quad-core Intel Core i6, Turbo Boost up to 2.3GHz', src2: 'memory.png', component2: 'Memory', memory: '3GB 1600MHz LPDDR3 SDRAM', src3: 'drive.png', component3: 'Hard Drive', drive: '50GB Serial ATA Drive @ 5400 rpm' }];

}

store.prototype.getProduct = function (code) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].code == code)
            return this.products[i];
    }
    
    return null;
}
detailsprod.prototype.getDetail = function (code) {
    for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].id == code)
            
            return this.details[i];
        
    }
    return null;
}
