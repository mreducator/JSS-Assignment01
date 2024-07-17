let typeOfPackage = 'overnight';
switch(typeOfPackage){
    case 'standard':
        console.log('Your Package will be delievered in 3-5 days');
        break;
    case 'express':
        console.log('Your Package will be delievered in 1-2 days');
        break;
    case 'overnight':
        console.log('Your Package will be delievered may be tomorrow');
        break;
        default:
            console.log('Invalid')
}     