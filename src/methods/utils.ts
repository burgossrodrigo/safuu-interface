export const formatValue = (percent: number | any, amount: number | any): number => {
    const math = (percent / 100) * Number(amount);
    return math
}

export const formatDecimalsFrom = (value: any) => {
    const result = Number(value) / (10 ** 18)
    return result
}

export const formatDecimalsTo = (value: any) => {
    const result = Number(value) * (10 ** 18)
    return result
}