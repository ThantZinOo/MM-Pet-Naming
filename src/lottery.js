const DELAY = 1000;
const lotteryById = {
    1516820260715: {
        id: '1516820260715',
        prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေသာင္းဆုႀကီး', prizeNumber: 'သ ၃၅၉၇၇၃'
    },
    1516820289796: {
        id: '1516820289796',
        prizeSeq: '20', prizeTitle: 'သိန္း ငါးေထာင္ဆု', prizeNumber: 'ကဃ ၇၃၇၂၁၁'
    },
};
const lotteryId = [
    '1516820260715',
    '1516820289796',
];
const Lottery = ({ id, prizeSeq, prizeTitle, prizeNumber }) => ({
    id,
    prizeSeq,
    prizeTitle,
    prizeNumber,
    destroy() {
        return new Promise((resolve) => {
            delete lotteryById[this.id];
            lotteryId.splice(lotteryId.indexOf(this.id), 1);
            resolve();
        }, DELAY);
    },
});
module.exports = {
    create({ prizeSeq,
        prizeTitle,
        prizeNumber }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const id = Date.now().toString();
                lotteryById[id] = {
                    id,
                    prizeSeq,
                    prizeTitle,
                    prizeNumber,
                };
                lotteryId.push(id);
                resolve(Lottery(lotteryById[id]));
            }, DELAY);
        });
    },
    findAll() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(lotteryId.map(id => Lottery(lotteryById[id])));
            }, DELAY);
        });
    },
    findById(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Lottery(lotteryById[id]));
            }, DELAY);
        });
    },
};

const lotteryResultJSON = [

    { prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေသာင္းဆုႀကီး', prizeNumber: 'သ ၃၅၉၇၇၃' },
    { prizeSeq: '20', prizeTitle: 'သိန္း ငါးေထာင္ဆု', prizeNumber: 'ကဃ ၇၃၇၂၁၁' },
    { prizeSeq: '20', prizeTitle: 'သိန္း ငါးေထာင္ဆု', prizeNumber: 'ကဌ ၁၇၈၉၅၆' },
    { prizeSeq: '20', prizeTitle: 'သိန္းသုံးေထာင္ဆု', prizeNumber: 'ဃ ၇၇၃၆၀၅' },
    { prizeSeq: '20', prizeTitle: 'သိန္းသုံးေထာင္ဆု', prizeNumber: 'လ ၄၇၂၇၂၈' },
    { prizeSeq: '20', prizeTitle: 'သိန္းသုံးေထာင္ဆု', prizeNumber: 'စ ၅၀၃၆၅၅' },
    { prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေထာင္ဆု', prizeNumber: 'ဆ ၃၇၉၆၀၀' },
    { prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေထာင္ဆု', prizeNumber: 'ကဏ ၅၉၆၃၆၇' },
    { prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေထာင္ဆု', prizeNumber: 'စ ၈၂၉၃၀၁' },
    { prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေထာင္ဆု', prizeNumber: 'ကထ ၉၆၄၈၁၁' },
    { prizeSeq: '20', prizeTitle: 'သိန္းတစ္ေထာင္ဆု', prizeNumber: 'ထ ၅၅၉၅၁၀' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ဃ ၇၆၇၈၇' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ကခ ၇၇၈၉၁' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'အ ၆၇၆၄၁' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ဟ ၆၃၂၀၁' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ဇ ၄၁၃၈၅' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ကဂ ၆၇၄၁၂' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ထ၁၆၉၄၅' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'အ ၂၅၆၆၀' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ကစ ၈၄၄၀၁' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၃ သိန္းဆု', prizeNumber: 'ဍ ၁၅၁၈၀' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ဃ ၈၇၂၈' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ဌ ၄၀၉၉' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ဍ ၉၇၁၈' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ကတ ၆၉၅၆' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'စ ၃၉၉၈' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ရ ၇၁၄၂' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ဋ ၈၂၅၀' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ဎ ၈၂၄၄' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ယ ၇၀၀၁' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၂ သိန္းဆု', prizeNumber: 'ဍ ၆၀၈၀' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ကဆ ၇၁၈' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ဂ ၇၁၇' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ကဇ ၈၄၅' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ဎ ၉၇၆' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ဍ ၆၃၈' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ပ ၉၃၅' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'သ ၅၉၆' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ကဎ ၈၈၈' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ဆ ၃၃၆' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ည ၅၉၉' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ကဇ ၅၂၆' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'ကဆ ၈၂၄' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၁ သိန္းဆု', prizeNumber: 'န ၇၆၄' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၅ ေသာင္းဆု', prizeNumber: 'ကဆ ၉၂' },
    { prizeSeq: '20', prizeTitle: 'က်ပ္ ၅ ေသာင္းဆု', prizeNumber: 'ကဃ ၅၆' },
  
  ];
  