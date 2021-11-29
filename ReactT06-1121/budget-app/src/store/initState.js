import { v4 as uuidv4 } from 'uuid';

const initState = {
    ListDataIncome: [
        {
            id: uuidv4(),
            description: 'Chi tien an sang ngay 08/01/2021',
            amount: -18000
        },
        {
            id: uuidv4(),
            description: 'Thu nhap thang 01',
            amount: 6000000
        },
        {
            id: uuidv4(),
            description: 'Tien nuoc uong ngay 08/01/2021',
            amount: -20000
        },
        {
            id: uuidv4(),
            description: 'Thu nhập bên ngoài 08/01/2021',
            amount: 50000
        }
    ]
}

export default initState