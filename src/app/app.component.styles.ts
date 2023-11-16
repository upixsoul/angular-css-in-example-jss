export const red: string = '#F44336'
export const green: string = '#4CAF50'
export const blue: string = '#2196F3'

export const myStyles = {
  title: {
    textAlign: 'center',
    backgroundColor: '#E0E0E0',
    '&:hover': {
      backgroundColor: '#BDBDBD'
    }
  },
  area: {
    width: '100%',
    height: '10rem',
    color: 'white',
    // @ts-ignore
    backgroundColor: data => data.area.backgroundColor
  }
}