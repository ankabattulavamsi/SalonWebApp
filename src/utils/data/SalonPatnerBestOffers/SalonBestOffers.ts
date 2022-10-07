import offerImg1 from '../../../assets/images/SalonPatnerBestOffersImg/Rectangle64(1).png'
import offerImg2 from '../../../assets/images/SalonPatnerBestOffersImg/Rectangle64.png'
import ModeEditIcon from '@mui/icons-material/ModeEdit'; 
import DeleteIcon from '@mui/icons-material/Delete';

export const SalonBestOffersData = [
    {
        id: 1,
        offerImage: offerImg1, 
        headingOff: 'Hair Color 20% Off',
        price: '240',
        dissPrice: '150', 
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking'
    }, 
    {
        id: 2,
        offerImage: offerImg2, 
        headingOff: 'Hair Color 20% Off',
        price: '240',
        dissPrice: '150', 
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking'
    }, 
    
] 

export const commonButtonsData = [
    {
        modeIcon : ModeEditIcon, 
        type: 'Edit'
    }, 
    {
        modeIcon : DeleteIcon, 
        type: 'Delete'
    }
]