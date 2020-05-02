import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private localNotifications: LocalNotifications
  ) { }

  ngOnInit() {
  }

  async confirmClearReminder() {
    const scheduledIds = await this.localNotifications.getScheduledIds();
    const allNotifications = await this.localNotifications.getAll();
    const scheduledNotifications = allNotifications.filter(notification => {
      return scheduledIds.find(id => id === notification.id);
    });
    console.log(scheduledNotifications);
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to clear <strong>${scheduledNotifications.length}</strong> reminders`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: async () => {
            await this.localNotifications.clear(scheduledIds);
          }
        }
      ]
    });

    await alert.present();
  }

}
