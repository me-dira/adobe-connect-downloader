# Adobe connect downloader.

## Import logic for developers

For simplicity and increasing code readability i use this logic to imports and definition of my code.

| pointers  | types     | description                  |
| --------- | --------- | ---------------------------- |
| interface | entity    | Entity interfaces            |
| interface | abstract  | Class abstraction interfaces |
| core      | entity    | Core implemented Entity      |
| constant  | --------- | Import any constant          |
| service   | http      | Http related services        |
| service   | scrape    | Scraping related services    |

```
# Logic
import {***} from '@pointer/{type}/{name}';

# Import example:
import {AnyInterface} from '@interface/abstract/AnyInterface';
```
