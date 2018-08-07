<template>
	<div class="WordReportPage">
	    <div class="zw-page" style="margin-left: 96px; margin-right: 96px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 22pt; text-decoration: none; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 22pt; text-decoration: none; font-weight: bold;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 1.5; text-align: right; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; text-decoration: none; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; text-decoration: none;">编号：中储粮（晋）检{{reportNum}}</span></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 16pt; font-weight: bold; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 16pt; font-weight: bold;">检 &nbsp;验 &nbsp;报 &nbsp;告</span></p>
				<table class="zw-table" data-node-id="node_06392209148120029" style="width: 6.492in; margin-left: 0in; border-collapse: collapse;">
					<colgroup>
						<col style="width: 1.19in;">
						<col style="width: 2.08in;">
						<col style="width: 1.45in;">
						<col style="width: 1.69in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">产品名称</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.sort" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检验编号</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.sampleNum" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">储存单位</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.cunchudanwei" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">仓（货位）号</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.counter" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">生产年度</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.shengchanniandu" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">储粮性质</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.quality" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">代表数量</span></p>
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">（吨）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.daibiaoshuliang" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">样品数量</span></p>
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">（公斤）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.sampleCount" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">样品描述</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-indent: 0; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.yangpinmiaoshu" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">样品状态</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.yangpinzhuangtai" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">扦样人</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-indent: 0in; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.qianyangren" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">扦样时间</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.sampleTime" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 59.52px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">扦样依据</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="3" merge="fc" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 59.52px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: left; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.qianyangyiju" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检验目的</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.jianyanmudi" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检验时间</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.jianyanshijian" type="text" /></span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检验依据</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="3" merge="fc" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.488px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.jianyanyiju" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52.704px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检验</span></p>
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">项目</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="3" merge="fc" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52.704px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1;  text-align: left; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.jianyanxiangmu" type="text" /></span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 134.016px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">检</span></p>
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">验</span></p>
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">结</span></p>
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">论</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="3" merge="fc" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: top; height: 134.016px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">

									<!--<p style="margin: 0px; line-height: 1; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.Jianyanjielun" type="text" /></span></p>-->
									<p style="margin:10px 0 0 0px; line-height: 1; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><textarea class="wordTextarea"  v-model="pagedata.Jianyanjielun" name="" rows="5" cols=""></textarea></span></p>


									<p style="margin: 0px; line-height: 1; text-indent: 2.833in; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">（检验报告专用章）</span></p>
									<p style="margin: 0px 0 5px; line-height: 1; text-indent: 2.583in; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">签发日期： &nbsp; 年 &nbsp; 月 &nbsp; 日</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 66.528px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<p style="margin: 0px; line-height: 1; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">备注</span></p>
								</div>
							</td>
							<td class="zw-td" colspan="3" merge="fc" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: top; height: 66.528px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.2px; padding-left: 7.2px;">
									<!--<p style="margin: 0px; line-height: 1; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; border-bottom: 0px;"><br></p>-->
									<p style="margin: 0px; line-height: 66.528px; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"><input class="wordInput" v-model="pagedata.beizhu" type="text" /></span></p>
									<!--<p style="margin: 0px; line-height: 1; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><br></p>-->
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="display: none;;border:0px none rgb(0, 0, 0);border-top:0px none rgb(0, 0, 0);border-bottom:0px none rgb(0, 0, 0);border-left:0px none rgb(0, 0, 0);border-right:0px none rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<p style="margin: 3px 0px 0px 0.292in; line-height: 1; text-indent: -4.333in; padding-left: 4.333in; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt; padding-bottom: 0px;"><span style="font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt;"> &nbsp; &nbsp;&nbsp;</span><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;">批准：&nbsp;</span><span style="font-family: 仿宋_GB2312, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 12pt; font-variant: normal; text-decoration: none; letter-spacing: 0pt; font-weight: normal; vertical-align: baseline; font-style: normal; background-color: rgba(0, 0, 0, 0);"><input style="width:6em;" class="wordInput" v-model="pagedata.pizhun" type="text" /></span><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"> &nbsp;审核： &nbsp;</span><span style="font-family: 仿宋_GB2312, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 12pt; font-variant: normal; text-decoration: none; letter-spacing: 0pt; font-weight: normal; vertical-align: baseline; font-style: normal; background-color: rgba(0, 0, 0, 0);"><input style="width:6em;" class="wordInput" v-model="pagedata.shenhe" type="text" /></span><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 12pt;"> &nbsp; 主检： &nbsp;</span><span style="font-family: 仿宋_GB2312, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 12pt; font-variant: normal; text-decoration: none; letter-spacing: 0pt; font-weight: normal; vertical-align: baseline; font-style: normal; background-color: rgba(0, 0, 0, 0);"><input style="width:6em;" class="wordInput" v-model="pagedata.zhujian" type="text" /></span></p>
				<p style="margin: 0px 0px 0px 3.553in; line-height: 1; text-indent: 1.75in; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 9pt; padding-bottom: 0px; border-bottom: 0px;"><br></p>
				<p style="margin: 0px 0px 0px 3.553in; line-height: 1; text-indent: 1.75in; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 9pt; padding-bottom: 0px; padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 9pt;">共2页 &nbsp; 第1页</span></p>
				<p style="margin: 0px; line-height: 1.5; text-align: center; font-family: 仿宋_GB2312; color: rgb(0, 0, 0); font-size: 22pt; text-decoration: none; font-weight: bold; padding-bottom: 0px; border-bottom: 0px;"><br></p>
				
			</div>
			<div class="zw-footer">
				<p style="margin: 0px; line-height: 1; font-family: calibri, carlito, sans-serif; color: rgb(0, 0, 0); font-size: 10pt; padding-bottom: 0px;"><br></p>
			</div>
		</div>
	</div>
</template>
<style>


</style>
<script>
//import "@/assets/style/common/Option_title.css"
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
//	props:['pagedata'],
	created(){

	},
	mounted(){
//		this.listWidth=document.querySelector('#AdvancedSearch').offsetWidth+'px';
	},
    computed:{
		...mapGetters(["Token","userName"]),
		
    },
    methods:{
		

	},
    data() {
	    return {
	      	reportNum:'20170031',
//	      	sort:'小麦',
//	      	unit:'中央储备粮洪洞直属库',
//	      	check:'监督检查',
	      	pagedata:{
	      		sort:'测试数据',
	      		sampleNum:'测试数据',
	      		cunchudanwei:'测试数据',
	      		counter:'测试数据',
	      		shengchanniandu:'测试数据',
	      		quality:'测试数据',
	      		daibiaoshuliang:'测试数据',
	      		sampleCount:'测试数据',
	      		yangpinmiaoshu:'测试数据',
	      		yangpinzhuangtai:'测试数据',
	      		qianyangren:'测试数据',
	      		sampleTime:'测试数据',
	      		qianyangyiju:'测试数据',
	      		jianyanmudi:'测试数据',
	      		jianyanshijian:'测试数据',
	      		jianyanyiju:'测试数据',
	      		jianyanxiangmu:'测试数据',
	      		Jianyanjielun:'测试数据',
	      		beizhu:'测试数据',
	      		pizhun:'测试数据',
	      		shenhe:'测试数据',
	      		zhujian:'测试数据',
	      	}
	    }
	},
}
</script>