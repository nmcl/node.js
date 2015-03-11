console.log('Debugging message')

function notDefined ()
{
    try
    {
	someFunction();
    }
    catch (e)
    {
	console.error(e);
    }
}

notDefined();