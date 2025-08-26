export interface CardData {
    id: string;
    value: string | number;
    valueFormat: 'number' | 'currency';
    change: string | number;
    changeFormat: 'percentage' | 'number';
    changeCase: 'plus' | '';
    status: 'positive' | 'negative' | 'neutral';
    animated: boolean;
    iconBg: string;
    iconPath: string;
    width: number;
    height: number;
    fill: string;
}