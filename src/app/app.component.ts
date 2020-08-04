import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clarity-demi';
  admins: any[] = [
    {
        name: "Tổng công ty",
        icon: "folder",
        expanded: true,
        admins: [          
          {
            name: "TP. Hà Nội",
            icon: "folder",
            expanded: true,
            admins: [
              {
                name: "Q. Ba Đình",
                icon: "folder",
                expanded: true,
                admins: [
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  }
                ]
              } 
            ]
          },
          {
            name: "TP. Hồ Chí Minh",
            icon: "folder",
            expanded: true,
            admins: [
              {
                name: "Q. Ba Đình",
                icon: "folder",
                admins: [
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  }
                ]
              } 
            ]
          },
          {
            name: "TP. Đà Nẳng",
            icon: "folder",
            expanded: true,
            admins: [
              {
                name: "Q. Ba Đình",
                icon: "folder",
                admins: [
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  },
                  {
                    name: "TP. Hà Nội",
                    icon: "file",
                    expanded: false
                  }
                ]
              } 
            ]
          }            
        ]
    }
  ];
}
