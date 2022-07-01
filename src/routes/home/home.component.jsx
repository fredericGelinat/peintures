import  {Outlet} from 'react-router-dom'

import Directory from '../../components/directory/directory.component';
const  Home = () =>{

  const categories =[
    {
      id: 1,
      title : 'Elektropaints',
      subtitle: 'Peintures à l"éléctricité',
      imageUrl: 'https://dl.airtable.com/.attachments/a8eb8474b4fbfa6c257a6ecd28e451bb/74540419/Detroit.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=b935ae608f300ad1'
    },
    {
      id: 2,
      title : 'Akua',
      subtitle: 'Art numérique',
      imageUrl: 'https://dl.airtable.com/.attachments/1bd88a53e64bd015d9115e16c6819bbc/24dc54d8/epidermik-papier-tintorreto.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=881cf497382460be'
    },
    {
      id: 3,
      title : 'News',
      subtitle: 'Les derniers tableaux',
      imageUrl: 'https://dl.airtable.com/.attachments/b68548f68341ddf78cd2fbf551db3578/cc768860/paysage-six.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=084d3e103a8e29eb'

    },
    {
      id: 4,
      title : 'Ateliers',
      subtitle: "Chez l'artiste",
      imageUrl: 'https://dl.airtable.com/.attachments/0780ae07db97abb3cca2ab9101eb63ba/9bacf54e/nikki-site.webp?ts=1656700915&userId=usrvaidRCSycghNu7&cs=dc3da6e7d021a623'

    },
    {
      id: 5,
      title : 'Expo',
      subtitle: 'visite guidée',
      imageUrl: 'https://dl.airtable.com/.attachments/ab94f9a53d700b833a7911c6d0b3703a/849aa7e5/PA250142.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=3ead02bc1a979e65'

    },
    {
      id: 6,
      title : 'En Résidence',
      subtitle: 'Photographies',
      imageUrl: 'https://dl.airtable.com/.attachments/1858a694d23b3525d5dc010708967d73/607354fe/mais26.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=d65e685fe5185924'

    },
    {
      id: 7,
    
      title : 'Videos',
      subtitle: 'Autre médium visuel',
      imageUrl: 'https://dl.airtable.com/.attachments/df18118375da9a12c34883e0c900ae92/3e52bf51/videoAcc.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=de05381f82c967cc'

    },
    {
      id: 8,
      title : 'Presse',
      subtitle: 'Ils en parlent!',
      imageUrl: 'https://dl.airtable.com/.attachments/9711cd673268c1f57de38024457bbdfc/ec4780a1/pressAccueil.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=d2cfcd1deabbe3ff'

    },
    {
      id: 9,
      title : 'Contact',
      subtitle: 'Parlons de vos envies',
      imageUrl: 'https://dl.airtable.com/.attachments/e08a7725ba476ed83e2550a3eb0b0f9e/2ba650ea/contact.webp?ts=1656685036&userId=usrvaidRCSycghNu7&cs=6e14719f6cc14bdc'
    }
  ];

  return (
    <div>
        <Outlet></Outlet>
   
   <Directory categories={categories}/>
   </div>
  );
}

export default Home