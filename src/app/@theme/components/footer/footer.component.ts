import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://www.linkedin.com/in/lucas-possati-3561bb170/" target="_blank">Lucas Possati</a></b> 2023
    </span>
    <div class="socials">
      <a href="https://github.com/lucaspossati?tab=repositories" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/lucas-possati-3561bb170/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
