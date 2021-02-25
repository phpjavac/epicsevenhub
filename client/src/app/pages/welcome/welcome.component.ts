import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { Gear, gearType, gearTypeList, gearRankType, gearStateType } from 'src/app/model/gears';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.styl'],
})
export class WelcomeComponent implements OnInit {
  constructor(public httpService: HttpserviceService) {}
  gearType = gearType;
  gearTypeList = gearTypeList;
  gearRankType = gearRankType;
  gearStateType = gearStateType;
  listObj: {
    [key: string]: Gear[];
  } = {
    Weapon: [],
    Helmet: [],
    Armor: [],
    Necklace: [],
    Ring: [],
    Boots: [],
  };

  iconList: {
    [key: string]: string;
  } = {
    Weapon: '../../../assets/icon/icons8-武士刀-50.png',
    Helmet: '../../../assets/icon/icons8-美式橄榄球头盔-50.png',
    Armor: '../../../assets/icon/icons8-装甲胸甲-50.png',
    Necklace: '../../../assets/icon/icons8-项链-50.png',
    Ring: '../../../assets/icon/icons8-魔戒-50.png',
    Boots: '../../../assets/icon/icons8-运动鞋-50.png',
  };
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getList();
  }
  async getList(): Promise<void> {
    const gearsList: Gear[] = await this.httpService.axiosGet('/api/gears');
    for (const iterator of Object.keys(this.listObj)) {
      this.listObj[iterator] = gearsList.filter((item) => {
        return item.gear === iterator;
      });
    }
    console.log(this.listObj);
  }
}
