var assert = require('chai').assert;
var EndpintManifest = require('../src/EndpointManifest');

describe('EndpointManifest', function(){
    it('should contain uri-template methods based on manifest',function(){
        assert.isFunction(EndpintManifest.getBoardData);
    })

    it('should accept arguments as named substitutions',function(){
        assert.equal(
            EndpintManifest.getBoardData({boardId: 'yarr'}),
            '/rest/api/2/board/yarr/data'
        );
    })
})
