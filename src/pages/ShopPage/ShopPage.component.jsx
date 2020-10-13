import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import { collections } from './shop.data';

class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: collections,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className='shoppage'>
				<h1>Shop Page</h1>
				{collections.map(({ id, ...PreviewOtherProps }) => (
					<CollectionPreview key={id} {...PreviewOtherProps} />
				))}
			</div>
		);
	}
}
export default ShopPage;
