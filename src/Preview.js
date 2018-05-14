import PropTypes from "prop-types";
import React from "react";
import urlParser from "js-video-url-parser";

export default class Preview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoInfo: {}
		};
	}

	getImage(videoInfo) {
		return urlParser.create({
			videoInfo,
			format: "longImage",
			params: { imageQuality: "maxresdefault" }
		});
	}

	render() {
		const value = this.props.value;
		const videoInfo =
			value === typeof String ? urlParser.parse(value) : value;
		const imageURL = this.getImage(videoInfo);

		console.log(value);

		return (
			<div className="yt-widgetPreview">
				<img
					style={{ width: "100%" }}
					src={
						imageURL
							? imageURL
							: `https://via.placeholder.com/720x405?text=${
									videoInfo.provider
							  }+${videoInfo.id}`
					}
					alt={`${videoInfo.provider} Video Preview`}
				/>
			</div>
		);
	}
}

Preview.propTypes = {
	value: PropTypes.node
};
