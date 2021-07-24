CREATE OR ALTER FUNCTION CityPair (
    @City1 CHAR(3),
    @City2 CHAR(3)
) 
RETURNS CHAR(6)
BEGIN

    SET @City1 = UPPER(@City1);
    SET @City2 = UPPER(@City2);

    RETURN IIF(
        @City1 < @City2, 
        @City1 + @City2, 
        @City2 + @City1
    );

END;

/*
    Function Tests:

    PRINT dbo.CityPair('BBB', 'aaa');
    PRINT dbo.CityPair('aaa', 'BBB');

    PRINT dbo.CityPair('jfk', 'alb');
    PRINT dbo.CityPair('alb', 'jfk');

    PRINT dbo.CityPair('mia', 'sea');
    PRINT dbo.CityPair('sea', 'mia');

    PRINT dbo.CityPair('MIA', 'SEA');
    PRINT dbo.CityPair('SEA', 'MIA');

*/
