import {expect, test} from '@oclif/test'

describe('show releases', () => {
  // brittle test
  test
  .stdout()
  .command(['releases:show', '-a', 'intense-crag-7074'])
  .it('displays the error if incorrect app name passed to the app', ctx => {
    expect(ctx.stdout).to.equal('{ resource: \'app\',\n  id: \'not_found\',\n  message: \'Couldn\\\'t find that app.\' }\n')
  })
  
  // brittle test
  test
  .stdout()
  .command(['releases:show', '-a', 'intense-crag-70741'])
  .it('show the release information for the app using equal', ctx => {
    expect(ctx.stdout).to.equal('🤓  Application Name: intense-crag-70741\n6 most recent releases shown:\n\nRelease v:6\n  Start Date: 2018-06-14T12:09:25Z\n  Author: michaelgdimmitt@gmail.com\n  Id: a0eb945b-401f-4669-b718-6d5a25bfcee6,\nRelease v:5\n  Start Date: 2018-06-14T12:08:15Z\n  Author: michaelgdimmitt@gmail.com\n  Id: b23ebbc1-294b-4afd-b5dc-f3e78d93a957,\nRelease v:4\n  Start Date: 2018-06-14T12:02:44Z\n  Author: michaelgdimmitt@gmail.com\n  Id: 9abccea1-24a5-4958-a438-485068299808,\nRelease v:3\n  Start Date: 2017-06-24T07:25:01Z\n  Author: michaelgdimmitt@gmail.com\n  Id: a0095d05-0b1b-42bd-81b3-06381422df56,\nRelease v:2\n  Start Date: 2017-06-24T07:23:55Z\n  Author: michaelgdimmitt@gmail.com\n  Id: 062a6f4e-3e8a-4acd-b045-e46542e0128e,\nRelease v:1\n  Start Date: 2017-06-24T07:23:54Z\n  Author: michaelgdimmitt@gmail.com\n  Id: 679604ce-4124-4a2e-82d0-8151de6cdde5\n')
  })
})
