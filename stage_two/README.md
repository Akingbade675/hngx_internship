<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

[uml diagram](https://online.visual-paradigm.com/app/diagrams/?lightbox=1&highlight=8888b6&edit=https%3A%2F%2Fonline.visual-paradigm.com%2Fapp%2Fdiagrams%2F%23diagram%3Aproj%3D0%26type%3DClassDiagram%26gallery%3D%2Frepository%2Ff078f2a9-88f3-4763-8889-b01cd2b7b90f.xml%26name%3DCar%2520and%2520Driver%2520Class%2520Diagram&editBlankUrl=https%3A%2F%2Fonline.visual-paradigm.com%2Fapp%2Fdiagrams%2F%23diagram%3Aproj%3D0%26vpov%3D16.3%26vpob%3D20220410%26client%3D1%26edit%3D_blank&layers=1&nav=1&title=Car%20and%20Driver%20Class%20Diagram&vpov=16.3&vpob=20220410#R3cU2FsdQGVkX1l%2F1IWGFeWLjMfgdp9iGJCon3rVwAdp0I3DWn5F6g%3Dg8rGXKw5dgaVegq4rv261lxb0jtAV2E4uud8fmh9wyIE8lRNDmE%2FaH61%2FIq34QzKQ1NmTadAMG5B6UxhBDpRwxt7zs%2B4chIlmvBsowlxBG%2BngOIkyGAyQG0FWMe1HESXlfJro3kWm9HGBN9LiJ705vgIHVgIY9kSyYHp%2FGnsaKUDBTjBwDCJXIU%2Bx4H0dR%2FJXTcIENNR0zLeItO6C9MH%2FIEhBqBXGXv%2BXOJFLP9Dx6uhfFRbs0rsJJC79wqpf0AvGyEdGdmNrlOjd6eFOCFTiCfS5Zme9tpxdwepywnUwXADHYt3qaSgwvr42H8bTNlWeMFQs1UQnGP7%2FBRbV0WNK2LkSN50DiRtRFBt6AIMRBKi8B2hC8s8kvsnnx69azQkYWdD%2FYFXdevXacLiuaxwejnCjgIbK08uuID2mCmt4YeysPsNi%2BtBr573y%2FIspImZpuSdvKnj6J0mZzv2PaFDHYr87F3Hpj72jY8v3kqCEW37af98D5fv5tEgqMBJnO27LY%2Bwy1XqFMtG3uoDedMykKVEN0kUbFX2f081kAQAWpkobR2tEkMcd6ScVyEWgnN379qOMYmzazxwUh6Gox0v1TZRcvOffyCDuvLeDfuAmQ3B%2F%2F6UBJdh%2Feyk48UjpGzorkxEB%2FHLuizd%2F5GeCcBBGhV5uzj3pydgr44SdWkVK0yWlfyiboKsH5yMTND8f%2FGQ%2BjoDTKRxSU1PNKtmlo9DOwgkkGQQSB%2B8C1MGh9btLLab2wcpILzls1LpjKRQgyeStzcBlXdZMqxwyUV5icKrJbpYmpmA9Y20QIvJ%2BJm2LozP7B5w%2BZz2GMQCxF3AtLRsnIdh9mkOggHe29eVdgOoTu%2Buf0B%2F5rhqlUdIrW0zoEaeJzdSDoS7fegfA2R9EuAu%2BafebxU29HxaAFg%2FCizS0SL4x5t5%2BfcjJBVeB2useb%2F0s3MlK6pN9khzcGzExClywpN1PGMIMffCASh%2FptmX%2BfaNRPDkQMWtHIQ7u31CVu4rDeXKVtKucCWvT09%2B1JbQAriO1SQ14kb2TWiiumvwxNkbWc8G5aCIP5ulKvgCJSLkZreuvNV1AAzG6EjtzpXcGEgnOvj2odjLeFnQ%2FnvZfSRvDlf1Z%2BdSxet6%2FecPzM5lc4yHwgj%2B1%2F%2FbPEYY3pmjJbhqogxneakOzlqxiysMQzyfgJKXXAh333j42vx4F%2FjTE4U94Tf2udSzf9kJXVhKTknlBOor7idMgMCr7BivbR1H%2FKcck0VpO8C3GX%2FlAncgm6Yin1dw54R06apMT4HqLIXvWbzG%2BdFpKzOUGFI08Bxa25enNDAZO6V21WcYg%2FiKJVWTRE4MS0uRuao435mM9BiQX10hm8AT8Z1OEOpNGlh2fdHMD479MuSSYVJe0SRN9iN1qNg8QE5h18S3rGgM4Mcf3kjQ%2FSBgVbbacq4FWEPAMHmkoHDvlQtPmr3N9Z8JHDHZHxci8PIJur3q58l9xsoX5%2FfHhLrOQ2Dlv9ZSRkx66IMXdMTZj%2BiwVhW%2F1FVEP5Jv50QOSWxwwguedZqBQztRUt%2BfaLz%2B4KHTerE9rOai3OGgAZjXIY21%2FkJyOtig7aZ56fzTQGnJ2wdEnrSnLKiKXKBWCLSyPWcdshdYZHbIWd0sUhVQXYIY2oHTEsERrtxC1LxqL4fUwWQAvjfPIqi2ktt%2BMSwPeSHW8lnj5hHWQIha%2Frbn%2BxPCjLvgiWh6DLh9tQSjRTwSwVtWl7CU1q0tIc%2BTzNmcPkwbqpzbS%2B7XSNXbumaX%2FaNPViS7aycPEF%2BXYaIrlUQAlA9aQpCKbsy%2FhOZ6bbRfLQgCqp7F2GQ2E9fTt8dhM2Zsw%2F7BjLd7OEmLe4D3AC263dv1VyS1ZZlAq2S9afhMUXmhrumBr%2Fv467eaP14V8K0KbRS1H91GEW0If484Q9JBqSw%2FT%2BmthtmDuBlxAN%2B3nx6ytxopykDYpVlmH0evOQ9lVfn6V95rA5JlZSlou%2BlNxuaq0y%2B4cAEmaQbFpGNRKuzocewSp8NuyyO5WVKcyqYquqz0Jl6401%2Fn2jE9FLsNatMJiI%2FMMVDwnm4FiNHcBomobyHpYGFcZ4S%2Fldn3Yhwk38zRvDhkV7dTH5VWpVpNRPaMN0j4jcIEypMx0sLkmgpkmoXB0fjYrwdLK3wCISwlmy2%2Fetj%2BawamLlk2pBVojV4S7CraCYkmN1TdQzZZgejlX9n88z9JAVCARRteFYVbd29jepyMRg9sA432IHIriFhcDsJF1LSUwMEr83lGLPyNgo74vlQWfeYFbwdIipNC3lqg3ZrGjQEPcSY5fm0QhEjGLQKRq5qDlny%2FUcGMjhNah8vKfZI0BwfWr7ljoVnyvH4h8riUx9M%2B%2FdfAoRkk6TRWAj06t1%2BYOoeEpKgLmyjgvet1d%2BisJfpFCLmYAIxE%2BvHoK2I0BXOkjBB3zZeqsXu79pPTpFBtNpy4MCI6Fu2ON0MC59NlPQeOvMDt6tHvtkSBTsepM%2F7tDJywRUQnHGuCbHf6BUaoxnxyZTydQWkf1YWOoDESbysMu8L4RjWFvgRFCUs%2FjMcneg7G386yeEfkUb%2B1Vmvm4lpzqfH8P1tSU5mg9n630EF0tSV2X1AOTbtjoPECy1pTevj1jZhubiAxLEYBCCX1rt%2FVVc%3D17VtZl71)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
