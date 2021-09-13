import {__experimentalScrollable as Scrollable } from '@wordpress/components/ui';
 
function Example() {
    return (
        <Scrollable style={ { maxHeight: 200 } }>
            <div style={ { height: 500 } }>...</div>
        </Scrollable>
    );
}