import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-snippet',
  templateUrl: './inbox-snippet.component.html',
  styleUrls: ['./inbox-snippet.component.css']
})
export class InboxSnippetComponent implements OnInit {

  constructor() { }

  private message;

  ngOnInit() {
    this.message = this.sample_message()
  }

  // generated from http://www.json-generator.com //
  private sample_messages: Array<object> = [
    {
      "_id": "5bc3f73d39796069d3e3466d",
      "index": 0,
      "picture": "sample1.png",
      "age": 38,
      "name": "Kaye Perez",
      "company": "LOTRON",
      "email": "kayeperez@lotron.com",
      "phone": "+1 (995) 545-3224",
      "address": "307 Oakland Place, Ribera, Kansas, 8946",
      "about": "Nisi pariatur est ut nostrud magna laborum adipisicing eiusmod ex velit aliqua ut. Eiusmod id sit ex amet deserunt pariatur veniam qui laboris quis cupidatat eiusmod. Id quis veniam et officia minim aliquip id.\r\n",
      "registered": "2014-07-23T04:50:06 +05:00",
      "tags": [
        "nostrud",
        "ea",
        "commodo",
        "consequat",
        "sunt",
        "ullamco",
        "qui"
      ],
      "subject": "Hello, Kaye Perez! You have 4 interesting things.",
      "favoriteFruit": "green"
    },
    {
      "_id": "5bc3f73d134e7418388a0a2e",
      "index": 1,
      "picture": "sample2.jpg",
      "age": 40,
      "name": "Gallegos Hurley",
      "company": "NETPLODE",
      "email": "gallegoshurley@netplode.com",
      "phone": "+1 (830) 597-2281",
      "address": "982 Bergen Street, Ruckersville, New Hampshire, 2220",
      "about": "Incididunt qui nulla non eiusmod qui nulla et officia. Ex et nisi laborum minim incididunt sint aute duis qui velit aliquip laboris elit excepteur. Ea sit et ipsum mollit pariatur Lorem aliqua amet qui aliqua amet. Aliquip aliquip ut minim proident laborum do esse proident in adipisicing pariatur.\r\n",
      "registered": "2014-02-02T12:19:50 +06:00",
      "tags": [
        "sint",
        "ipsum",
        "nulla",
        "exercitation",
        "ullamco",
        "aliqua",
        "ea"
      ],
      "subject": "Hello, Gallegos Hurley! You have 8 interesting things.",
      "favoriteFruit": "brown"
    },
    {
      "_id": "5bc3f73d6bea1547328bd104",
      "index": 2,
      "picture": "sample3.jpg",
      "age": 30,
      "name": "Jocelyn Bass",
      "company": "INTERODEO",
      "email": "jocelynbass@interodeo.com",
      "phone": "+1 (981) 587-2557",
      "address": "806 Conklin Avenue, Bison, Pennsylvania, 2774",
      "about": "Commodo nulla nisi exercitation adipisicing ex ipsum fugiat minim adipisicing qui incididunt ea anim. Occaecat id qui quis consectetur nulla mollit nulla Lorem non dolore minim laboris proident eiusmod. In eu cupidatat ipsum eu sint veniam dolore. Voluptate ut duis laborum ipsum ad veniam esse cupidatat cupidatat. Non commodo pariatur aute elit quis pariatur ad non incididunt magna duis. Officia dolore consequat in cupidatat sit consectetur nulla dolore consectetur amet consectetur incididunt incididunt.\r\n",
      "registered": "2016-11-03T02:26:46 +05:00",
      "tags": [
        "irure",
        "non",
        "nulla",
        "officia",
        "ullamco",
        "tempor",
        "cillum"
      ],
      "subject": "Hello, Jocelyn Bass! You have 8 interesting things.",
      "favoriteFruit": "red"
    },
    {
      "_id": "5bc3f73d17b0d19b61f14bba",
      "index": 3,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Macias Charles",
      "company": "LYRICHORD",
      "email": "maciascharles@lyrichord.com",
      "phone": "+1 (972) 404-2186",
      "address": "779 Monroe Street, Coinjock, Alabama, 3594",
      "about": "Consectetur et qui officia ex magna cillum eiusmod fugiat voluptate. Adipisicing ad laborum est veniam excepteur. Esse aliqua ex et anim nisi id consectetur ex.\r\n",
      "registered": "2017-03-27T04:55:28 +05:00",
      "tags": [
        "proident",
        "et",
        "non",
        "irure",
        "qui",
        "do",
        "mollit"
      ],
      "subject": "Hello, Macias Charles! You have 9 interesting things.",
      "favoriteFruit": "red"
    },
    {
      "_id": "5bc3f73da237c3af97ed93b4",
      "index": 4,
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Cruz Navarro",
      "company": "ROUGHIES",
      "email": "cruznavarro@roughies.com",
      "phone": "+1 (930) 420-2883",
      "address": "300 Eastern Parkway, Spokane, Utah, 5725",
      "about": "Duis non eiusmod irure dolore ullamco. Do ipsum sunt esse ea labore ex culpa velit non consectetur eiusmod veniam officia do. Aute sint consequat consequat elit do aliqua cillum enim. Minim do velit qui sunt ex adipisicing do dolore amet. Incididunt magna magna nisi commodo sit magna incididunt laborum. Commodo commodo in exercitation qui veniam eiusmod aliqua laboris voluptate cillum nulla laboris. Labore et sit aute anim voluptate ex aute fugiat exercitation est nulla.\r\n",
      "registered": "2018-09-08T05:15:40 +05:00",
      "tags": [
        "minim",
        "dolor",
        "sunt",
        "est",
        "deserunt",
        "veniam",
        "deserunt"
      ],
      "subject": "Hello, Cruz Navarro! You have 5 interesting things.",
      "favoriteFruit": "green"
    },
    {
      "_id": "5bc3f73d34a1db8c9f15fad5",
      "index": 5,
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Marina Solis",
      "company": "FRANSCENE",
      "email": "marinasolis@franscene.com",
      "phone": "+1 (932) 595-3941",
      "address": "813 Cass Place, Craig, South Dakota, 7231",
      "about": "Lorem consequat aliquip Lorem adipisicing. Irure aliquip officia officia enim qui ipsum mollit duis aute nulla cupidatat nisi non. Anim labore sit consectetur amet. Nostrud cupidatat elit pariatur ea id. Commodo voluptate ad veniam elit ipsum et nostrud ipsum est sit qui dolor. Velit reprehenderit labore consectetur eu mollit do.\r\n",
      "registered": "2017-06-23T07:35:41 +05:00",
      "tags": [
        "commodo",
        "ad",
        "ullamco",
        "occaecat",
        "magna",
        "laborum",
        "sunt"
      ],
      "subject": "Hello, Marina Solis! You have 9 interesting things.",
      "favoriteFruit": "black"
    },
    {
      "_id": "5bc3f73d50ba237e02e42c79",
      "index": 6,
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "name": "Gallagher Drake",
      "company": "STUCCO",
      "email": "gallagherdrake@stucco.com",
      "phone": "+1 (892) 481-2701",
      "address": "281 Osborn Street, Beyerville, Massachusetts, 1916",
      "about": "Exercitation laborum cillum tempor aliquip dolore occaecat Lorem minim excepteur occaecat veniam magna proident. Occaecat aute esse do aute tempor fugiat. Ex id ad commodo dolor irure. Laboris dolor amet magna anim in fugiat pariatur aliquip proident nostrud. Sit mollit ullamco magna est officia reprehenderit proident eiusmod id eu. Do tempor in ut incididunt consequat nulla pariatur fugiat laboris officia qui excepteur.\r\n",
      "registered": "2017-09-04T09:47:15 +05:00",
      "tags": [
        "id",
        "commodo",
        "eu",
        "qui",
        "et",
        "officia",
        "dolore"
      ],
      "subject": "Hello, Gallagher Drake! You have 2 interesting things.",
      "favoriteFruit": "red"
    }
  ];

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public sample_message() { 
    return this.sample_messages[this.getRandomInt(3)];
  }
  
}
