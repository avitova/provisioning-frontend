<!-- insertion marker -->
<a name="1.2.0"></a>

## [1.2.0](https://github.com/RHEnVision/provisioning-frontend/compare/1.1.0...1.2.0) (2023-06-26)

### Bug Fixes

- **HMSPROV-2012:** fix missing instances table ([5cc1c67](https://github.com/RHEnVision/provisioning-frontend/commit/5cc1c6729c0fc3bc577e9937cae2ca5b0690b03d))
- **HMS-1917:** Add source filtering in GCP ([58da4d6](https://github.com/RHEnVision/provisioning-frontend/commit/58da4d69b2a51b3ef8ca7465b5a73b8e90975262))

### Code Refactoring

- remove service account from test ([9eb9b28](https://github.com/RHEnVision/provisioning-frontend/commit/9eb9b28e932819e1eb1eb6a9f28edc6845a2e13b))

<a name="1.1.0"></a>

## [1.1.0](https://github.com/RHEnVision/provisioning-frontend/compare/1.0.0...1.1.0) (2023-06-13)

### Features

- **HMS-1907:** add dev script for  containerizing provisioning env ([6641ce4](https://github.com/RHEnVision/provisioning-frontend/commit/6641ce42354a92cc3aaac547aae9c905d72be626))

<a name="1.0.0"></a>

## [1.0.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.21.0...1.0.0) (2023-05-31)

### Features

- remove feature flag for AWS launch template ([ea2775a](https://github.com/RHEnVision/provisioning-frontend/commit/ea2775adcdb5e8ad33b80309f9faf4931fd485ad))
- Prolong polling for Azure ([9ce1066](https://github.com/RHEnVision/provisioning-frontend/commit/9ce1066194a58230779769a9ae2acc3807c27dcb))

### Bug Fixes

- remove double slash from URL ([e4b73a2](https://github.com/RHEnVision/provisioning-frontend/commit/e4b73a2b8834b87ab24de36fbc64cf7881ea5162))
- **HMS-1799:** fix typos ([fe59358](https://github.com/RHEnVision/provisioning-frontend/commit/fe59358bf743585a3265b71a015fbcacf4b7c79e))
- Region select disabled when one cloned image exists ([71df35f](https://github.com/RHEnVision/provisioning-frontend/commit/71df35f2d8efa803d34348c5716b2ef79cca006a))
- **HMS-1748:** use staleTime config ([7acb3ea](https://github.com/RHEnVision/provisioning-frontend/commit/7acb3ea87aef09ea73950fc4b71be5218ea03319))

<a name="0.21.0"></a>

## [0.21.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.20.0...0.21.0) (2023-05-15)

### Features

- **HMS-1411:**  ed25519 type is unsupported in azure ([519e930](https://github.com/RHEnVision/provisioning-frontend/commit/519e9309272723a8ca3b4dc9408f3fed03e416f3))
- **HMS-1614:** Add vCPU limit Warning ([6029c5b](https://github.com/RHEnVision/provisioning-frontend/commit/6029c5ba688bb4ccf0132fb82a85ce42f26379bb))
- **HMS-1109:** Add correlation id to UI ([03c58b9](https://github.com/RHEnVision/provisioning-frontend/commit/03c58b98da9eaba0ecbeafd2ecbf6c685266bc57))

### Bug Fixes

- Sources link respect preview toggle ([9a188f9](https://github.com/RHEnVision/provisioning-frontend/commit/9a188f9f5e2023fab595cea722842d4098ebd97f))

<a name="0.20.0"></a>

## [0.20.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.19.0...0.20.0) (2023-05-02)

### Bug Fixes

- **HMS-1573:** add clear button to template select ([cf8de91](https://github.com/RHEnVision/provisioning-frontend/commit/cf8de91d060c32e4e78de166b2415bde8d9c2826))
- **HMS-1573:** add launch template name in review step ([149b452](https://github.com/RHEnVision/provisioning-frontend/commit/149b452b8ad8f9cfc22d6fae77fe2c34bf4f186f))
- sources loading when one source failing ([6223e13](https://github.com/RHEnVision/provisioning-frontend/commit/6223e136432a09d0e399cd0100faa3eeb8013421))
- **HMS-1648:** Remove `isOpen` from Wizard ([36ce777](https://github.com/RHEnVision/provisioning-frontend/commit/36ce7776b55def608afc7892fdb841013037c9ef))

### Code Refactoring

- **HMS-1573:** fix failing tests ([4858ca9](https://github.com/RHEnVision/provisioning-frontend/commit/4858ca92982795d449e8141c160452502964a50d))

<a name="0.19.0"></a>

## [0.19.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.18.0...0.19.0) (2023-04-19)

### Features

- filter source in the select ([88ffd54](https://github.com/RHEnVision/provisioning-frontend/commit/88ffd5413bc43e01a8ab318d113b4e18f0534cd6))
- support for Azure image deployed to source account ([7fd735b](https://github.com/RHEnVision/provisioning-frontend/commit/7fd735b0ae65bc56c9b28080042e07aa835bf252))
- Add region select for AWS in Empty state ([2f468cf](https://github.com/RHEnVision/provisioning-frontend/commit/2f468cf2dc6906a07c2b8767caec0ad9b2047be1))
- Add Azure instance table on Launch success ([ac05138](https://github.com/RHEnVision/provisioning-frontend/commit/ac0513849b96552051493f6270c79a12a447fc1a))
- add empty state when no source available ([e42c381](https://github.com/RHEnVision/provisioning-frontend/commit/e42c3811861e73252882db6166b64c89e297395e))
- **HMS-1210:** add launch template to wizard (#226) ([459f786](https://github.com/RHEnVision/provisioning-frontend/commit/459f786f3265d91d058493650228320609a67793))
- **HMS-1477:** mark succesful launch progress ([cd2737f](https://github.com/RHEnVision/provisioning-frontend/commit/cd2737f0dc39e0ee37c8fc9ba05048e9cb4d3aaf))

### Bug Fixes

- **HMS-1553:** use warning for polling timeout ([f32ebbb](https://github.com/RHEnVision/provisioning-frontend/commit/f32ebbb5b0d60cde5f007c2b4b7c55ffaab9edf1))
- **HMS-#1504:** fix timeout interval regression during lanuch ([0f32476](https://github.com/RHEnVision/provisioning-frontend/commit/0f32476f77288efec7b04949322c319c280f3cee))

### Code Refactoring

- Stateless region select ([6fa978f](https://github.com/RHEnVision/provisioning-frontend/commit/6fa978fd8c8a30589aa68e6850f1f57e5fbe824e))

<a name="0.18.0"></a>

## [0.18.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.17.0...0.18.0) (2023-03-23)

### Features

- Add Azure as provider in the wizard ([fc42dd1](https://github.com/RHEnVision/provisioning-frontend/commit/fc42dd1c3cf6057cc1f774e5f66c6a1268f6e994))
- **HMS-1222:** Add support to a source shared with an image ([ab4b17d](https://github.com/RHEnVision/provisioning-frontend/commit/ab4b17deb1358a4dd442d45151f1985fb7b1a53c))
- **HMS-761:** add instances description table after launch ([9fab7e5](https://github.com/RHEnVision/provisioning-frontend/commit/9fab7e5581c852c9a38199f195db80a4523bd994))

### Bug Fixes

- **HMS-1382:** remove the clear button from region select ([9904e0a](https://github.com/RHEnVision/provisioning-frontend/commit/9904e0af37c5ed8385f18baa76bcb30d5e89a5c3))

### Code Refactoring

- Add ouid for Card on show additional info ([583aecd](https://github.com/RHEnVision/provisioning-frontend/commit/583aecd9fc37fa371f44c93165028de04804d8e6))

<a name="0.17.0"></a>

## [0.17.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.16.0...0.17.0) (2023-03-09)

### Bug Fixes

- instance type labels (#212) ([5dafb54](https://github.com/RHEnVision/provisioning-frontend/commit/5dafb5432acc85ef01662227f0fcd71b7db046d0))
- **HMS-1361:** fix a 404 api call at first rendering ([5515b07](https://github.com/RHEnVision/provisioning-frontend/commit/5515b076d8e228e2ee71cb983de71c1002d0c5a4))
- **HMS-1131:** filter out regions with unsuccessful image clones ([08aeb73](https://github.com/RHEnVision/provisioning-frontend/commit/08aeb73b1088508231359617d611f26fa19d37e1))

<a name="0.16.0"></a>

## [0.16.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.15.0...0.16.0) (2023-02-22)

### Features

- **HMS-776:** add gcp UI to wizard ([251c2cc](https://github.com/RHEnVision/provisioning-frontend/commit/251c2cc2f44c9afcbc8b0d9dead305a1b5533917))

### Bug Fixes

- **HMS-1237:** show warning alert when instance type is not supported ([553b1a3](https://github.com/RHEnVision/provisioning-frontend/commit/553b1a310e26bd725d70eabff586931427a072ab))

### Code Refactoring

- Add sources filtering by provider ([0f9b14f](https://github.com/RHEnVision/provisioning-frontend/commit/0f9b14f6cb2c4eb71303db62b928cc0084b2c34d))
- Add custom ids to wizard buttons ([ecb11e6](https://github.com/RHEnVision/provisioning-frontend/commit/ecb11e60aff2613f51e6121458f6a9a2c9c30b06))

<a name="0.15.0"></a>

## [0.15.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.14.1...0.15.0) (2023-02-08)

### Features

- **HMS-1196:** Refactor progress bar to progress steps ([765643b](https://github.com/RHEnVision/provisioning-frontend/commit/765643bc3ac584f247bde5f5570933aa9865b2be))

### Bug Fixes

- **HMS-1195:** fix ssh page after edit ([11bd5f8](https://github.com/RHEnVision/provisioning-frontend/commit/11bd5f89831fb2193b8b76f895330ab2ee369fc6))

<a name="0.14.1"></a>

## [0.14.1](https://github.com/RHEnVision/provisioning-frontend/compare/0.14.0...0.14.1) (2023-01-30)

### Features

- **HMSPROV-406:** add additional info during launch polling ([83414f0](https://github.com/RHEnVision/provisioning-frontend/commit/83414f04016217bfa8c491cf462e4be3d4a344c5))

<a name="0.14.0"></a>

## [0.14.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.13.0...0.14.0) (2023-01-19)

### Features

- **HMSPROV-419:** add a timeout session for reservation polling ([78f40f7](https://github.com/RHEnVision/provisioning-frontend/commit/78f40f7b2a893c2be15f002d66dd5f912908cf28))

### Bug Fixes

- move to useChrome hook ([799f5c6](https://github.com/RHEnVision/provisioning-frontend/commit/799f5c6446cfc78bb0785998bd867b29eaa3a967))
- **HMSPROV-406:** filter instance types with substring ([9343e4f](https://github.com/RHEnVision/provisioning-frontend/commit/9343e4fa08d008324d4239392597b3e2ee6beabe))
- **HMSPROV-420:** show image dropdown and AMI input at once ([2e5321e](https://github.com/RHEnVision/provisioning-frontend/commit/2e5321e1eb3999cf3883349194a27bacb67d8d07))

<a name="0.13.0"></a>

## [0.13.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.12.0...0.13.0) (2023-01-12)

<a name="0.12.0"></a>

## [0.12.0](https://github.com/RHEnVision/provisioning-frontend/compare/0.11.0...0.12.0) (2022-11-27)

### Features

- add reservation id as hidden field ([a419d49](https://github.com/RHEnVision/provisioning-frontend/commit/a419d49f5b7569db5da738999ec4b99cd46657d5))

### Bug Fixes

- **HMSPROV-364:** popover body style ([63073d4](https://github.com/RHEnVision/provisioning-frontend/commit/63073d4842e5fa8d55a08ef28922fc606a2b609e))
- **text:** Improve textation of review description ([dde2273](https://github.com/RHEnVision/provisioning-frontend/commit/dde22738e6e71d4241dcd2e4b7bd42e5ed790c62))

<a name="0.11.0"></a>

## [0.11.0](https://github.com/RHEnVision/provisioning-frontend/compare/7029e78f6ba13aef3591c2685700253ba3eb4480...0.11.0) (2022-11-14)

### Bug Fixes

- **pubkeys:** Component refresh does not move cursor ([34b88b7](https://github.com/RHEnVision/provisioning-frontend/commit/34b88b7844ed12e49d13a0ccb84de4ab56800b19))

