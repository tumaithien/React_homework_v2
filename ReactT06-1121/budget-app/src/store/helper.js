
const amountConfig = { style: 'currency', currency: 'VND' };

export function formatStringAmount(amount){
    let sign = '+';
    let amountFormated = amount;

    if(amount < 0){
        sign = '-'
        amountFormated = amount * (-1)
    }

    amountFormated = new Intl.NumberFormat('vi-VN', amountConfig).format(amountFormated)
    
    amountFormated = amountFormated.substring(0, amountFormated.length - 2)


    return `${sign} ${amountFormated}`;
}

export function calTotalAmount(ListData){
    let total = 0;

    for(let index = 0; index < ListData.length; index ++){
        const data = ListData[index];
        const amount = data.amount;

        total = total + amount;
    }

    return total
}

export function formatPercentAmount(amount, total){
    let percentAmount = Math.round((amount / total) * 100);

    if(percentAmount < 0){
        percentAmount = percentAmount * (-1);
    }

    return percentAmount + '%';
}
