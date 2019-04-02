module.exports = {
  curve: {
    name: 'Square',
    visible: true,
    input: {
      x: '-5:5',
      y: 'x^2'
    },
    color: '#f0000f',
    lineStyle: 'default'
  },
  pointMark: {
    name: 'My Point',
    x: 10,
    y: 10,
    visible: true,
    color: '#ff0000'
  },
  grid: {
    name: 'Main Grid',
    x: true,
    y: true,
    color: '#cccccc',
    unitMultiply: 1
  },
  options: {
    view: {
      title: {
        show: true,
        text: ''
      }
    },
    legend: {
      show: false,
      position: {
        x: 1,
        y: 1
      }
    },
    padding: {
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
      unit: 'cm'
    },
    background: {
      color: '#ffffff',
      image: ''
    },
    scale: {
      x: {
        from: 1,
        to: {
          value: 0.5,
          unit: 'cm'
        }
      },
      y: {
        from: 1,
        to: {
          value: 0.5,
          unit: 'cm'
        }
      }
    }
  }
};
