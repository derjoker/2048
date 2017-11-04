import { range, reverse } from 'lodash';
import { DIRECTION } from './game';

export default function traversals(size, direction) {
  switch (direction) {
    case DIRECTION.UP:
      return range(size).map(y => range(size).map(x => x * size + y));
    case DIRECTION.RIGHT:
      return range(size).map(x => reverse(range(size).map(y => x * size + y)));
    case DIRECTION.DOWN:
      return range(size).map(y => reverse(range(size).map(x => x * size + y)));
    case DIRECTION.LEFT:
      return range(size).map(x => range(size).map(y => x * size + y));
  }
}
