import FAQItem from '@/components/FAQItem';

function FAQ() {
  return (
    <div className='mx-auto md:w-5/6 lg:w-4/6'>
      <div className='py-4'>
        <h1 className='text-7xl text-secondary-500 text-center font-bold'>Întrebări frecvente</h1>
        <hr className='bg-primary-0 m-1 h-1' />
        <p className='text-2xl m-4 text-text-600 font-semibold'>
          Aici am adunat întrebările care ne-au fost adresate cel mai des de-a lungul anilor, pentru a nu mai fi nevoit să întrebi, iar dacă totuși ai alte nelămuriri, așteptăm un mesaj pe
          <a href='https://www.facebook.com/esutimisoara/' className='text-primary-0 font-semibold'> Facebook </a>
          sau
          <a href='https://www.instagram.com/esu.lsfetc/' className='text-primary-0 font-semibold'> Instagram</a>
          .
        </p>
      </div>
      <div>
        <FAQItem question="Cine suntem noi?" answer="Voluntari ai Ligii Studenților din Facultatea de Electronică și Telecomunicații (LSFETc), o organizație non-guvernamentală ce are ca scop principal reprezentarea studenților din Facultatea de Electronică, Telecomunicații și Tehnologii Informaționale (ETcTI)." />
        <FAQItem question="Ce este ESU?" answer="Electronics Summer University (ESU) este o Universitate de Vară care se adresează elevilor de clasa a XI-a." />
        <FAQItem question="Ce se întâmplă la ESU?" answer="Timp de două săptămâni, elevii experimentează viața de student din Timișoara. Au parte de cursuri, laboratoare, workshopuri, traininguri, seri sociale și multe altele." />
        <FAQItem question="Care este scopul proiectului?" answer="Pregătirea elevilor pentru mediul universitar, familiarizarea acestora cu mediul social și cultural din Timișoara și reducerea abandonului universitar." />
        <FAQItem question="Când se desfășoară caravana?" answer="În perioada 11 martie – 24 mai." />
        <FAQItem question="Când se desfășoară înscrierea?" answer="În perioada 27 mai – 30 iunie." />
        <FAQItem question="Când se desfășoară proiectul?" answer="În perioada 21 august – 3 septembrie." />
        <FAQItem question="Unde se desfășoară proiectul?" answer="În Timișoara." />
        <FAQItem question="Cine se poate înscrie?" answer="Orice elev de clasa a XI-a." />
        <FAQItem question="Care este numărul de participanți la acest proiect?" answer="Vor participa 100 de elevi din toată țara." />
        <FAQItem question="Cum știu dacă am fost selectat să particip?" answer="Veti fii contactati pentru confirmare și vor  fi postate listele cu participanți aleși." />
        <FAQItem question="Mesele ne sunt asigurate?" answer="Da, toate mesele sunt asigurate de noi." />
        <FAQItem question="Cazarea ne este asigurată? Unde?" answer="Da, la unul din căminele UPT din Complexul Studențesc." />
        <FAQItem question="De câți bani avem nevoie?" answer="Mesele și cazarea sunt asigurate de noi, iar transportul cu trenul este gratuit. Singurii bani de care aveți nevoie sunt cei de cheltuială." />
        <FAQItem question="Trebuie să mă înscriu la ETcTI dacă particip la ESU?" answer="Nu, doar dacă dorești. <3" />
      </div>
    </div>
  );
}

export default FAQ;
