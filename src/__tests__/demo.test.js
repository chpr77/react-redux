describe (`Testing functional module`,()=>{
    it('Adding 2+2 to get 4',()=>{
        //AAA = Arrange -Act - Assert pattern
        //Arrange initializatin
        let x=2
        let y=2
        let result=0

        //Act . calling function and performing action
        result=x+y

        //Assert . Expectations are met or not with actual value 
        expect(result).toEqual(4)
    })
})