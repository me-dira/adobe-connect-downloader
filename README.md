# Adobe connect downloader.
## Under construct.
This package is not fully completed and not event tested properly. Please use alternatives that are mentioned in [Alternatives](#Alternatives) section.

## Help
If you are developer and you like to help for developing this package try to contact with in any way. If you like we can book a meeting to help you fully understand the code.

Or you can simply read the code and get a fork from this repo then add your features and create a pull request.

If you have any feature request or detected any bug, feel free to open a new issue after you searched in previously closed issues.

## About tool.
This tool is very helpful and becomes   handy when you want to download meetings from old Adobe Connect tool that is deprecated all around the world but steel is operating in `Iran` for education purposes.

**Purpose** of this tool is to download files from that meeting server as output and glue them to gether no matter it's recorded screen or not.

## Alternatives
There are few of alternatives out there and all are written in python. But if this package does not satisfy's your needs then go and checkout similar packages:

| Developer | Package |
| --------- | ------- |
|[Sina Rostami](https://github.com/sina-rostami) | [Adobe Connect Meetings Downloader](https://github.com/sina-rostami/Adobe-Connect-Meetings-Downloader) |
| [Soroushamdg](https://github.com/soroushamdg/acd) | [ACD](https://github.com/soroushamdg/acd)

## Import logic for developers

For simplicity and increasing code readability i use this logic to imports and structure of my code.

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

# Hoy