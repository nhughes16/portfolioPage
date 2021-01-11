function testSwitch(size) {
    switch (size) {
      case 'small':
        alert('This chair is to small!');
        break;
      case 'medium':
        alert('This chair is just right!');
        break;
      case 'large':
        alert('This chair is too big!');
        break;
      default:
          alert('This chair is an unknown size.');
    }
  }