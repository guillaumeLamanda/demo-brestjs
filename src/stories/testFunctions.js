import {linkTo} from '@storybook/addon-links';

export const fLogin = (login, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(login, password)
        linkTo('Button')
        return resolve;
      }, 1000);
    })
  }

export const user = {
  fistName: 'Guillaume',
  lastName: 'Lamanda',
  img: './brestJS.png'
}