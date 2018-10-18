import Guide from './models/guide';

export default function () {
  Guide.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = 'this is the answer 1';

    const content2 = 'this is the answer 2';


    const faq1 = new Guide({ image: 'dd', faqs: [{ question: 'question1', answer: content1 }, { question: 'question2', answer: content2 }] });

    Guide.create(faq1, (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
